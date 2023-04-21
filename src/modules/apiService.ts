import type { ILogObj, Logger } from 'tslog';
import got, {
  Got, isResponseOk, Options, PlainResponse,
} from 'got';
import { IApiError, IApiResponse, ApiResult } from './IService.js';

import { LIB_VERSION } from '../version.js';

export default class Service {
  private got: Got;

  private log: Logger<ILogObj>;

  constructor(config: any, log: Logger<ILogObj>) {
    this.log = log;
    const options = new Options({
      https: {
        certificate: config.auth.cert,
        key: config.auth.key,
      },
      prefixUrl: config.baseUrl,
      headers: {
        'User-Agent': `${config.organizationName}/${LIB_VERSION}`,
        Accept: 'application/json',
      },
    });
    this.got = got.extend(options);
  }

  async get<T>(endpoint: string, params?: any): Promise<IApiResponse<T | IApiError>> {
    const response: PlainResponse = await this.got.get(
      endpoint,
      {
        searchParams: params,
        throwHttpErrors: false,
      },
    ) as PlainResponse;

    this.log.debug(`GET -- ${response.url}`);

    this.log.silly(`body: ${response.body}`);

    if (!isResponseOk(response)) {
      this.log.error(response.statusMessage);

      return {
        result: ApiResult.failure,
        data: <IApiError>{
          errorCode: response.statusCode,
          description: response.statusMessage,
        },
      };
    }

    return {
      result: ApiResult.success,
      data: <T>JSON.parse(response.body as string),
    };
  }
}
