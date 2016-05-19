'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _microCache = require('micro-cache');

var _microCache2 = _interopRequireDefault(_microCache);

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

var _entity = require('./modules/entity');

var _entity2 = _interopRequireDefault(_entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readCertificate() {
  var cert = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var key = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (cert === '' || key === '' || !_fs2.default.existsSync(cert) || !_fs2.default.existsSync(key)) {
    throw new Error('Client cert ' + cert + ' or key ' + key + ' can not be found');
  }

  return {
    cert: _fs2.default.readFileSync(cert),
    key: _fs2.default.readFileSync(key)
  };
}

var UWPWS = {
  initialize: function initialize(options) {
    var config = options;
    config.auth = readCertificate(options.cert, options.key);

    _winston2.default.loggers.add('uwpws', {
      console: {
        colorize: true,
        label: 'uwpws',
        level: process.env.LOG_LEVEL || options.logLevel,
        prettyPrint: true
      }
    });

    config.log = _winston2.default.loggers.get('uwpws');
    config.cache = new _microCache2.default(options.cachePath, options.logLevel, options.cacheExt);

    this.person = new _person2.default(config);
    this.entity = new _entity2.default(config);

    return this;
  }
};

module.exports = UWPWS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZUFBVCxHQUE4QztBQUFBLE1BQXJCLElBQXFCLHlEQUFkLEVBQWM7QUFBQSxNQUFWLEdBQVUseURBQUosRUFBSTs7QUFDNUMsTUFBSSxTQUFTLEVBQVQsSUFBZSxRQUFRLEVBQXZCLElBQ0EsQ0FBQyxhQUFHLFVBQUgsQ0FBYyxJQUFkLENBREQsSUFDd0IsQ0FBQyxhQUFHLFVBQUgsQ0FBYyxHQUFkLENBRDdCLEVBQ2lEO0FBQy9DLFVBQU0sSUFBSSxLQUFKLGtCQUF5QixJQUF6QixnQkFBd0MsR0FBeEMsdUJBQU47QUFDRDs7QUFFRCxTQUFPO0FBQ0wsVUFBTSxhQUFHLFlBQUgsQ0FBZ0IsSUFBaEIsQ0FERDtBQUVMLFNBQU0sYUFBRyxZQUFILENBQWdCLEdBQWhCO0FBRkQsR0FBUDtBQUlEOztBQUVELElBQUksUUFBUTtBQUNWLFlBRFUsc0JBQ0MsT0FERCxFQUNVO0FBQ2xCLFFBQUksU0FBUyxPQUFiO0FBQ0EsV0FBTyxJQUFQLEdBQWMsZ0JBQWdCLFFBQVEsSUFBeEIsRUFBOEIsUUFBUSxHQUF0QyxDQUFkOztBQUVBLHNCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsZUFBUztBQUNQLGtCQUFhLElBRE47QUFFUCxlQUFhLE9BRk47QUFHUCxlQUFhLFFBQVEsR0FBUixDQUFZLFNBQVosSUFBeUIsUUFBUSxRQUh2QztBQUlQLHFCQUFhO0FBSk47QUFEa0IsS0FBN0I7O0FBU0EsV0FBTyxHQUFQLEdBQWEsa0JBQVEsT0FBUixDQUFnQixHQUFoQixDQUFvQixPQUFwQixDQUFiO0FBQ0EsV0FBTyxLQUFQLEdBQWUseUJBQ2IsUUFBUSxTQURLLEVBRWIsUUFBUSxRQUZLLEVBR2IsUUFBUSxRQUhLLENBQWY7O0FBTUEsU0FBSyxNQUFMLEdBQWMscUJBQVcsTUFBWCxDQUFkO0FBQ0EsU0FBSyxNQUFMLEdBQWMscUJBQVcsTUFBWCxDQUFkOztBQUVBLFdBQU8sSUFBUDtBQUNEO0FBekJTLENBQVo7O0FBNEJBLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyAgICAgICAgICAgZnJvbSAnZnMnO1xuaW1wb3J0IHdpbnN0b24gICAgICBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBNaWNyb0NhY2hlICAgZnJvbSAnbWljcm8tY2FjaGUnO1xuaW1wb3J0IFBlcnNvbiAgICAgICBmcm9tICcuL21vZHVsZXMvcGVyc29uJztcbmltcG9ydCBFbnRpdHkgICAgICAgZnJvbSAnLi9tb2R1bGVzL2VudGl0eSc7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXUFdTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcbiAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3cHdzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3B3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgICAgcHJldHR5UHJpbnQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZy5sb2cgPSB3aW5zdG9uLmxvZ2dlcnMuZ2V0KCd1d3B3cycpO1xuICAgIGNvbmZpZy5jYWNoZSA9IG5ldyBNaWNyb0NhY2hlKFxuICAgICAgb3B0aW9ucy5jYWNoZVBhdGgsXG4gICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgb3B0aW9ucy5jYWNoZUV4dFxuICAgICk7XG5cbiAgICB0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oY29uZmlnKTtcbiAgICB0aGlzLmVudGl0eSA9IG5ldyBFbnRpdHkoY29uZmlnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVXUFdTO1xuIl19