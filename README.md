# UW Person Web Service
This implements the [v2 UW Person Webservice endpoints](https://wiki.cac.washington.edu/display/pws/Person+Web+Service).  Each endpoint is queried using convenient options to build the final ``request``.

This module assumes you have gone through all the required steps to get access and verified that access as [documented in the SWS wiki](https://wiki.cac.washington.edu/display/pws/Person+Web+Service).

Note: Version 4.0.0 and later require Node 8.

## USE

### Installation

    npm install uwpws

### Examples

Import the module and set it's configuration.  You must set a ``cacheMode`` to tell the ``micro-cache`` module to save http requests or not to the filesystem (useful for development).  In production, set that mode to ``wild`` to force all requests to go over the internet.

#### First, set your config and initialize

The certInfo object should only contain either a file or an s3 object. If you include both, only the file object will be picked up.

```JavaScript
const uwpws = require('uwpws');

let config = {
  baseUrl:   'https://wseval.s.uw.edu/identity/v2/',
  cacheExt:  '.json',
  cacheMode: 'wild',
  cachePath: '.cache/',
  certInfo:  {
    file: {
      cert: 'PATH TO CERT',
      key:  'PATH TO KEY'
    }
    // s3: {
    //   certBucket: 'uwfosterit.certs',
    //   certKey:    'laps_cert.cer',
    //   keyBucket:  'uwfosterit.certs',
    //   keyKey:     'laps_cert.key'
    // }
  },
};

await uwpws.initialize(config);
```

#### Then, search for a Person or Entity
Search for a person, see ``src/modules/person`` for all the parameters you can use and ``test/unit/person-test.js`` for implementations. Notice, the Person and Entity searches are very similar, both have ``get`` and ``search`` functions.  Simply use ``uwpws.entity`` instead of ``uwpws.person``.

```JavaScript
// Using Promises
let options = {
  id: '24CB6CD8AE3511D68CBC0004AC494FFE'
};

uwpws.entity.get(options)
  .then((result) => {
    console.log(result);
    console.log(result.data.DisplayName);
  },
  (error) => {
    console.log(error);
  });
```

Or search for any entity that starts with the name of ``marc`` paging by 10 and starting on page 2.

```JavaScript
let options = {
  name:  'marc',
  size:  10,
  start: 2
};

uwpws.entity.search(options)
  .then((result) => {
    console.log(result.data);
  });
```

### Using a local cache

The ``cacheMode`` can be set to any one of the following modes.  This uses the ``micro-cache`` node module as a local file system cache.

- wild: all requests go out to the internet, don't load anything from cache, doesn't save anything.
- dryrun: Loads files from cache if exists, does http calls when cache doesn't exist, doesn't save to the cache.
- record: Loads files from the cache and saves new ones to the cache.

### Logging
This module uses ``winston`` for all logging.  Set an environment variable to a valid log level such as ``LOG_LEVEL=debug node yourscript.js``.

## Development

Copy ``test/setup/config-sample.js`` to ``test/setup/config.js`` and edit values as needed. Use the ``npm`` commands indicated in ``package.json``.

    npm build
    npm test
    npm lint
