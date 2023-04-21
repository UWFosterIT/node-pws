export interface IUwPwsOptions {
  organizationName: string,
  baseUrl: string,
  certData: {
    cert: string | Buffer,
    key: string | Buffer,
  },
  uwPwsLogLevel?: string,
}
