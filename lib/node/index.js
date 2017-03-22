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
  var cert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFkQ2VydGlmaWNhdGUiLCJjZXJ0Iiwia2V5IiwiZXhpc3RzU3luYyIsIkVycm9yIiwicmVhZEZpbGVTeW5jIiwiVVdQV1MiLCJpbml0aWFsaXplIiwib3B0aW9ucyIsImNvbmZpZyIsImF1dGgiLCJsb2dnZXJzIiwiYWRkIiwiY29uc29sZSIsImNvbG9yaXplIiwibGFiZWwiLCJsZXZlbCIsInByb2Nlc3MiLCJlbnYiLCJMT0dfTEVWRUwiLCJsb2dMZXZlbCIsInByZXR0eVByaW50IiwibG9nIiwiZ2V0IiwiY2FjaGUiLCJjYWNoZVBhdGgiLCJjYWNoZUV4dCIsInBlcnNvbiIsImVudGl0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsZUFBVCxHQUE4QztBQUFBLE1BQXJCQyxJQUFxQix1RUFBZCxFQUFjO0FBQUEsTUFBVkMsR0FBVSx1RUFBSixFQUFJOztBQUM1QyxNQUFJRCxTQUFTLEVBQVQsSUFBZUMsUUFBUSxFQUF2QixJQUNBLENBQUMsYUFBR0MsVUFBSCxDQUFjRixJQUFkLENBREQsSUFDd0IsQ0FBQyxhQUFHRSxVQUFILENBQWNELEdBQWQsQ0FEN0IsRUFDaUQ7QUFDL0MsVUFBTSxJQUFJRSxLQUFKLGtCQUF5QkgsSUFBekIsZ0JBQXdDQyxHQUF4Qyx1QkFBTjtBQUNEOztBQUVELFNBQU87QUFDTEQsVUFBTSxhQUFHSSxZQUFILENBQWdCSixJQUFoQixDQUREO0FBRUxDLFNBQU0sYUFBR0csWUFBSCxDQUFnQkgsR0FBaEI7QUFGRCxHQUFQO0FBSUQ7O0FBRUQsSUFBSUksUUFBUTtBQUNWQyxZQURVLHNCQUNDQyxPQURELEVBQ1U7QUFDbEIsUUFBSUMsU0FBU0QsT0FBYjtBQUNBQyxXQUFPQyxJQUFQLEdBQWNWLGdCQUFnQlEsUUFBUVAsSUFBeEIsRUFBOEJPLFFBQVFOLEdBQXRDLENBQWQ7O0FBRUEsc0JBQVFTLE9BQVIsQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCLEVBQTZCO0FBQzNCQyxlQUFTO0FBQ1BDLGtCQUFhLElBRE47QUFFUEMsZUFBYSxPQUZOO0FBR1BDLGVBQWFDLFFBQVFDLEdBQVIsQ0FBWUMsU0FBWixJQUF5QlgsUUFBUVksUUFIdkM7QUFJUEMscUJBQWE7QUFKTjtBQURrQixLQUE3Qjs7QUFTQVosV0FBT2EsR0FBUCxHQUFhLGtCQUFRWCxPQUFSLENBQWdCWSxHQUFoQixDQUFvQixPQUFwQixDQUFiO0FBQ0FkLFdBQU9lLEtBQVAsR0FBZSx5QkFDYmhCLFFBQVFpQixTQURLLEVBRWJqQixRQUFRWSxRQUZLLEVBR2JaLFFBQVFrQixRQUhLLENBQWY7O0FBTUEsU0FBS0MsTUFBTCxHQUFjLHFCQUFXbEIsTUFBWCxDQUFkO0FBQ0EsU0FBS21CLE1BQUwsR0FBYyxxQkFBV25CLE1BQVgsQ0FBZDs7QUFFQSxXQUFPLElBQVA7QUFDRDtBQXpCUyxDQUFaOztBQTRCQW9CLE9BQU9DLE9BQVAsR0FBaUJ4QixLQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyAgICAgICAgICAgZnJvbSAnZnMnO1xuaW1wb3J0IHdpbnN0b24gICAgICBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBNaWNyb0NhY2hlICAgZnJvbSAnbWljcm8tY2FjaGUnO1xuaW1wb3J0IFBlcnNvbiAgICAgICBmcm9tICcuL21vZHVsZXMvcGVyc29uJztcbmltcG9ydCBFbnRpdHkgICAgICAgZnJvbSAnLi9tb2R1bGVzL2VudGl0eSc7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXUFdTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcbiAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3cHdzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3B3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgb3B0aW9ucy5sb2dMZXZlbCxcbiAgICAgICAgcHJldHR5UHJpbnQ6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZy5sb2cgPSB3aW5zdG9uLmxvZ2dlcnMuZ2V0KCd1d3B3cycpO1xuICAgIGNvbmZpZy5jYWNoZSA9IG5ldyBNaWNyb0NhY2hlKFxuICAgICAgb3B0aW9ucy5jYWNoZVBhdGgsXG4gICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgb3B0aW9ucy5jYWNoZUV4dFxuICAgICk7XG5cbiAgICB0aGlzLnBlcnNvbiA9IG5ldyBQZXJzb24oY29uZmlnKTtcbiAgICB0aGlzLmVudGl0eSA9IG5ldyBFbnRpdHkoY29uZmlnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVXUFdTO1xuIl19