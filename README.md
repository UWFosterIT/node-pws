# UW Person Web Service

This implements the [v2 UW Person Webservice endpoints](https://wiki.cac.washington.edu/display/pws/Person+Web+Service).  Each endpoint is queried using convenient options to build the final ``request``.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/pws/Person+Web+Service).

Note: Version 4.0.0 and later require Node 8.

## USE

### Installation

    npm i uwpws

### Configuration

Configuration options are passed as an object to the constructor.

#### `organizationName`

The organization name is a string that identifies your organization and will appear in the headers of requests to the UW PWS API. This helps when working with UW IT to debug your application.

#### `baseUrl`

The URL of the PWS server. You can use the test or production server.

#### `auth: { cert: 'cert data', key: 'key data' }`

The Person Web Service requires that you pass a valid UW x509 client certificate with all requests. The data returned from the request is restricted to what is authorized for your cert.

You can use the included certificate fetcher helpers to get cert and key data from local files, from an AWS S3 bucket, or you can create a custom fetcher.

#### `uwPwsLogLevel`

You can set the log level to `silly`, `trace`, `debug`, `info`, `warn`, `error`, or `fatal`.

```JavaScript
import UwPws from 'uwPws';

const config = {
  organizationName: 'YOUR ORGANIZATION NAME',

  baseUrl: 'https://ws.admin.washington.edu/student/v5/',

  //uwPwsLogLevel: 'debug',

  // Change 'certData' property to the return value of the
  // 'readCertificate()' method if using a certFetcher helper.
  certData: {
    cert: 'PASS CERT STRING OR BUFFER HERE',
    key: 'PASS CERT STRING OR BUFFER HERE',
  },
};

const uwPws = new UwPws(config);

const aPerson = {
  firstName: 'BART',
  lastName: 'SIMPSON',
};
const result = await uwPws.person.search(aPerson);
const searchResults = result.data;

console.log(searchResults);
```

For more use examples see the unit tests in `__tests__/*`.

For a full list of all the supported endpoints and options see `src/endpoints/*`.

If you find one that doesn't work or if an endpoint or option isn't supported, please create an issue.

## Certificate Fetchers

This package includes a helper module to fetch client certificates using different methods. The built-in fetchers includes support for AWS S3 and the local file system. You can also create custom certificate fetchers. See the `./__tests__/certFetcher-test.ts` file for a custom certFetcher example.

```JavaScript
import { CertFetcherManager } from '../src/index';

// AWS S3 fetcher configuration options
const s3Config = {
  region: 'YOUR S3 REGION',
  certBucket: 'CERTIFICATE BUCKET NAME',
  certKey: 'CERTIFICATE KEY',
  keyBucket: 'KEY BUCKET NAME',
  keyKey: 'KEY KEY',
}

// Local file fetcher configuration options
const localConfig = {
      cert: 'PATH TO CERTIFICATE FILE',
      key: 'PATH TO KEY FILE',
    }

const certFetcherManager = new CertFetcherManager();

const s3Fetcher = certFetcherManager.getFetcher('s3');
const s3CertData = await s3Fetcher.readCertificate(s3Config);

const fileFetcher = certFetcherManager.getFetcher('file');
const fileCertData = await fileFetcher.readCertificate(localConfig);

// ... pass s3CertData or fileCertData to UwPws configuration object.

```

## Endpoint Implementation

Endpoint | Implementation
---------|--------------
Entity | UwPws.entity.get(options)
Entity Search | UwPws.entity.search(options)
Person | UwPws.person.get(options)
Person Search | UwPws.person.search(options)