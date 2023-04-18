import { Logger, ILogObj } from 'tslog';
import Service from './modules/apiService.js';
import type { IUwPwsOptions } from './IUwPwsOptions';
import Person from './endpoints/person.js';
import Entity from './endpoints/entity.js';

export { CertFetcherManager } from './certFetcher/cert-fetcher-manager.js';
export { ICertFetcher } from './certFetcher/ICertFetcher.js';
export { IApiError } from './modules/IService.js';
export { IUwPwsOptions } from './IUwPwsOptions.js';

enum LogLevel {
  silly,
  trace,
  debug,
  info,
  warn,
  error,
  fatal,
}

const logSettings = {
  prettyLogTemplate: '{{rawIsoStr}} - {{logLevelName}}: [{{name}}]',
  stylePrettyLogs: false,
} as const;

export class UwPws {
  private log: Logger<ILogObj>;

  private service: Service;

  person: Person;

  entity: Entity;

  constructor(options: IUwPwsOptions) {
    this.log = new Logger({ name: this.constructor.name, minLevel: LogLevel[options.logLevel || 'error'], ...logSettings });

    this.service = new Service({
      organizationName: options.organizationName,
      baseUrl: options.baseUrl,
      auth: options.certData,
    }, this.log);

    this.person = new Person(this.service, this.log);
    this.entity = new Entity(this.service, this.log);
  }
}
