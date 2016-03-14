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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZUFBVCxHQUE4QztNQUFyQiw2REFBTyxrQkFBYztNQUFWLDREQUFNLGtCQUFJOztBQUM1QyxNQUFJLFNBQVMsRUFBVCxJQUFlLFFBQVEsRUFBUixJQUNmLENBQUMsYUFBRyxVQUFILENBQWMsSUFBZCxDQUFELElBQXdCLENBQUMsYUFBRyxVQUFILENBQWMsR0FBZCxDQUFELEVBQXFCO0FBQy9DLFVBQU0sSUFBSSxLQUFKLGtCQUF5QixvQkFBZSx5QkFBeEMsQ0FBTixDQUQrQztHQURqRDs7QUFLQSxTQUFPO0FBQ0wsVUFBTSxhQUFHLFlBQUgsQ0FBZ0IsSUFBaEIsQ0FBTjtBQUNBLFNBQU0sYUFBRyxZQUFILENBQWdCLEdBQWhCLENBQU47R0FGRixDQU40QztDQUE5Qzs7QUFZQSxJQUFJLFFBQVE7QUFDVixrQ0FBVyxTQUFTO0FBQ2xCLFFBQUksU0FBUyxPQUFULENBRGM7QUFFbEIsV0FBTyxJQUFQLEdBQWMsZ0JBQWdCLFFBQVEsSUFBUixFQUFjLFFBQVEsR0FBUixDQUE1QyxDQUZrQjs7QUFJbEIsc0JBQVEsT0FBUixDQUFnQixHQUFoQixDQUFvQixPQUFwQixFQUE2QjtBQUMzQixlQUFTO0FBQ1Asa0JBQWEsSUFBYjtBQUNBLGVBQWEsT0FBYjtBQUNBLGVBQWEsUUFBUSxHQUFSLENBQVksU0FBWixJQUF5QixRQUFRLFFBQVI7QUFDdEMscUJBQWEsSUFBYjtPQUpGO0tBREYsRUFKa0I7O0FBYWxCLFdBQU8sR0FBUCxHQUFhLGtCQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBb0IsT0FBcEIsQ0FBYixDQWJrQjtBQWNsQixXQUFPLEtBQVAsR0FBZSx5QkFDYixRQUFRLFNBQVIsRUFDQSxRQUFRLFFBQVIsRUFDQSxRQUFRLFFBQVIsQ0FIRixDQWRrQjs7QUFvQmxCLFNBQUssTUFBTCxHQUFjLHFCQUFXLE1BQVgsQ0FBZCxDQXBCa0I7QUFxQmxCLFNBQUssTUFBTCxHQUFjLHFCQUFXLE1BQVgsQ0FBZCxDQXJCa0I7O0FBdUJsQixXQUFPLElBQVAsQ0F2QmtCO0dBRFY7Q0FBUjs7QUE0QkosT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzICAgICAgICAgICBmcm9tICdmcyc7XG5pbXBvcnQgd2luc3RvbiAgICAgIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IE1pY3JvQ2FjaGUgICBmcm9tICdtaWNyby1jYWNoZSc7XG5pbXBvcnQgUGVyc29uICAgICAgIGZyb20gJy4vbW9kdWxlcy9wZXJzb24nO1xuaW1wb3J0IEVudGl0eSAgICAgICBmcm9tICcuL21vZHVsZXMvZW50aXR5JztcblxuZnVuY3Rpb24gcmVhZENlcnRpZmljYXRlKGNlcnQgPSAnJywga2V5ID0gJycpIHtcbiAgaWYgKGNlcnQgPT09ICcnIHx8IGtleSA9PT0gJycgfHxcbiAgICAgICFmcy5leGlzdHNTeW5jKGNlcnQpIHx8ICFmcy5leGlzdHNTeW5jKGtleSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENsaWVudCBjZXJ0ICR7Y2VydH0gb3Iga2V5ICR7a2V5fSBjYW4gbm90IGJlIGZvdW5kYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhjZXJ0KSxcbiAgICBrZXk6ICBmcy5yZWFkRmlsZVN5bmMoa2V5KVxuICB9O1xufVxuXG5sZXQgVVdQV1MgPSB7XG4gIGluaXRpYWxpemUob3B0aW9ucykge1xuICAgIGxldCBjb25maWcgPSBvcHRpb25zO1xuICAgIGNvbmZpZy5hdXRoID0gcmVhZENlcnRpZmljYXRlKG9wdGlvbnMuY2VydCwgb3B0aW9ucy5rZXkpO1xuXG4gICAgd2luc3Rvbi5sb2dnZXJzLmFkZCgndXdwd3MnLCB7XG4gICAgICBjb25zb2xlOiB7XG4gICAgICAgIGNvbG9yaXplOiAgICB0cnVlLFxuICAgICAgICBsYWJlbDogICAgICAgJ3V3cHdzJyxcbiAgICAgICAgbGV2ZWw6ICAgICAgIHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCBvcHRpb25zLmxvZ0xldmVsLFxuICAgICAgICBwcmV0dHlQcmludDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnLmxvZyA9IHdpbnN0b24ubG9nZ2Vycy5nZXQoJ3V3cHdzJyk7XG4gICAgY29uZmlnLmNhY2hlID0gbmV3IE1pY3JvQ2FjaGUoXG4gICAgICBvcHRpb25zLmNhY2hlUGF0aCxcbiAgICAgIG9wdGlvbnMubG9nTGV2ZWwsXG4gICAgICBvcHRpb25zLmNhY2hlRXh0XG4gICAgKTtcblxuICAgIHRoaXMucGVyc29uID0gbmV3IFBlcnNvbihjb25maWcpO1xuICAgIHRoaXMuZW50aXR5ID0gbmV3IEVudGl0eShjb25maWcpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVVdQV1M7XG4iXX0=