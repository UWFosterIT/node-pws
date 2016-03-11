'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _microCache = require('micro-cache');

var _microCache2 = _interopRequireDefault(_microCache);

var _person = require('./modules/person');

var _person2 = _interopRequireDefault(_person);

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
        level: options.logLevel,
        prettyPrint: true
      }
    });

    config.log = _winston2.default.loggers.get('uwpws');
    config.cache = new _microCache2.default(options.cachePath, options.logLevel);

    this.person = new _person2.default(config);

    return this;
  }
};

module.exports = UWPWS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLGVBQVQsR0FBOEM7TUFBckIsNkRBQU8sa0JBQWM7TUFBViw0REFBTSxrQkFBSTs7QUFDNUMsTUFBSSxTQUFTLEVBQVQsSUFBZSxRQUFRLEVBQVIsSUFDZixDQUFDLGFBQUcsVUFBSCxDQUFjLElBQWQsQ0FBRCxJQUF3QixDQUFDLGFBQUcsVUFBSCxDQUFjLEdBQWQsQ0FBRCxFQUFxQjtBQUMvQyxVQUFNLElBQUksS0FBSixrQkFBeUIsb0JBQWUseUJBQXhDLENBQU4sQ0FEK0M7R0FEakQ7O0FBS0EsU0FBTztBQUNMLFVBQU0sYUFBRyxZQUFILENBQWdCLElBQWhCLENBQU47QUFDQSxTQUFNLGFBQUcsWUFBSCxDQUFnQixHQUFoQixDQUFOO0dBRkYsQ0FONEM7Q0FBOUM7O0FBWUEsSUFBSSxRQUFRO0FBQ1Ysa0NBQVcsU0FBUztBQUNsQixRQUFJLFNBQVMsT0FBVCxDQURjO0FBRWxCLFdBQU8sSUFBUCxHQUFjLGdCQUFnQixRQUFRLElBQVIsRUFBYyxRQUFRLEdBQVIsQ0FBNUMsQ0FGa0I7O0FBSWxCLHNCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDM0IsZUFBUztBQUNQLGtCQUFhLElBQWI7QUFDQSxlQUFhLE9BQWI7QUFDQSxlQUFhLFFBQVEsUUFBUjtBQUNiLHFCQUFhLElBQWI7T0FKRjtLQURGLEVBSmtCOztBQWFsQixXQUFPLEdBQVAsR0FBYSxrQkFBUSxPQUFSLENBQWdCLEdBQWhCLENBQW9CLE9BQXBCLENBQWIsQ0Fia0I7QUFjbEIsV0FBTyxLQUFQLEdBQWUseUJBQWUsUUFBUSxTQUFSLEVBQW1CLFFBQVEsUUFBUixDQUFqRCxDQWRrQjs7QUFnQmxCLFNBQUssTUFBTCxHQUFvQixxQkFBVyxNQUFYLENBQXBCLENBaEJrQjs7QUFrQmxCLFdBQU8sSUFBUCxDQWxCa0I7R0FEVjtDQUFSOztBQXVCSixPQUFPLE9BQVAsR0FBaUIsS0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgICAgICAgICAgIGZyb20gJ2ZzJztcbmltcG9ydCB3aW5zdG9uICAgICAgZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgTWljcm9DYWNoZSAgIGZyb20gJ21pY3JvLWNhY2hlJztcbmltcG9ydCBQZXJzb24gICAgICAgZnJvbSAnLi9tb2R1bGVzL3BlcnNvbic7XG5cbmZ1bmN0aW9uIHJlYWRDZXJ0aWZpY2F0ZShjZXJ0ID0gJycsIGtleSA9ICcnKSB7XG4gIGlmIChjZXJ0ID09PSAnJyB8fCBrZXkgPT09ICcnIHx8XG4gICAgICAhZnMuZXhpc3RzU3luYyhjZXJ0KSB8fCAhZnMuZXhpc3RzU3luYyhrZXkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDbGllbnQgY2VydCAke2NlcnR9IG9yIGtleSAke2tleX0gY2FuIG5vdCBiZSBmb3VuZGApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoY2VydCksXG4gICAga2V5OiAgZnMucmVhZEZpbGVTeW5jKGtleSlcbiAgfTtcbn1cblxubGV0IFVXUFdTID0ge1xuICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0gb3B0aW9ucztcbiAgICBjb25maWcuYXV0aCA9IHJlYWRDZXJ0aWZpY2F0ZShvcHRpb25zLmNlcnQsIG9wdGlvbnMua2V5KTtcblxuICAgIHdpbnN0b24ubG9nZ2Vycy5hZGQoJ3V3cHdzJywge1xuICAgICAgY29uc29sZToge1xuICAgICAgICBjb2xvcml6ZTogICAgdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICAgICAgICd1d3B3cycsXG4gICAgICAgIGxldmVsOiAgICAgICBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgICBwcmV0dHlQcmludDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnLmxvZyA9IHdpbnN0b24ubG9nZ2Vycy5nZXQoJ3V3cHdzJyk7XG4gICAgY29uZmlnLmNhY2hlID0gbmV3IE1pY3JvQ2FjaGUob3B0aW9ucy5jYWNoZVBhdGgsIG9wdGlvbnMubG9nTGV2ZWwpO1xuXG4gICAgdGhpcy5wZXJzb24gICAgICAgPSBuZXcgUGVyc29uKGNvbmZpZyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVV1BXUztcbiJdfQ==