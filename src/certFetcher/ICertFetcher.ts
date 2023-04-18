import type { IAuth } from './IAuth.js';

export interface ICertFetcher {
  readCertificate(config?: any): Promise<IAuth>
}
