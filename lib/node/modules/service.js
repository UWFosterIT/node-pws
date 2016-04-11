'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Service = function () {
  function Service(config) {
    _classCallCheck(this, Service);

    this.config = config;
    this.log = config.log;
    this.cache = config.cache;
  }

  _createClass(Service, [{
    key: '_options',
    value: function _options(endpoint) {
      return {
        agentOptions: this.config.auth,
        uriCache: endpoint.replace(/\//g, ''),
        uri: this.config.baseUrl + endpoint
      };
    }
  }, {
    key: '_get',
    value: function _get(endpoint) {
      var _this = this;

      return new Promise(function (fulfill, reject) {
        // wild    no load no save
        // dryrun  load not save
        // record  load and save
        var options = _this._options(endpoint);

        if (_this.config.cacheMode === 'wild') {
          _this.log.debug('wild -- ' + options.uri);
          _request2.default.get(options, function (err, response, body) {
            if (err) {
              reject(err);
            }

            // special case for 404 (vs. returning html)
            if (response.statusCode === 404) {
              body = 'Not found.';
            }
            fulfill(_this._buildResult(response, body));
          });
        } else if (_this.config.cacheMode === 'dryrun') {
          _this.log.debug('dryrun for ' + options.uri);
          var body = _this.cache.read(options.uriCache);
          if (body) {
            var response = {};
            response.statusCode = 200;
            fulfill(_this._buildResult(response, body));
          } else {
            _request2.default.get(options, function (err, response, body) {
              if (err) {
                reject(err);
              }

              if (response.statusCode === 404) {
                body = 'Not found.';
              }
              fulfill(_this._buildResult(response, body));
            });
          }
        } else if (_this.config.cacheMode === 'record') {
          _this.log.debug('record -- ' + options.uri);
          var _body = _this.cache.read(options.uriCache);
          if (_body) {
            var _response = {};
            _response.statusCode = 200;
            fulfill(_this._buildResult(_response, _body));
          } else {
            _request2.default.get(options, function (err, response, body) {
              if (err) {
                reject(err);
              }

              if (response.statusCode === 200) {
                _this.cache.write(options.uriCache, body, true);
              } else if (response.statusCode === 404) {
                body = 'Not found.';
              }
              fulfill(_this._buildResult(response, body));
            });
          }
        }
      });
    }
  }, {
    key: '_buildResult',
    value: function _buildResult(response, body) {
      var result = {};
      result.statusCode = response.statusCode;
      if (response.statusCode !== 200) {
        if (!this._isJson(body)) {
          result.message = body;
        } else {
          result.message = JSON.parse(body);
        }
        result.data = {};
      } else {
        result.data = JSON.parse(body);
      }
      return result;
    }
  }, {
    key: '_isJson',
    value: function _isJson(data) {
      try {
        JSON.parse(data);
      } catch (e) {
        return false;
      }
      return true;
    }
  }]);

  return Service;
}();

exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLE1BQVosRUFBb0I7MEJBRGhCLFNBQ2dCOztBQUNsQixTQUFLLE1BQUwsR0FBYyxNQUFkLENBRGtCO0FBRWxCLFNBQUssR0FBTCxHQUFjLE9BQU8sR0FBUCxDQUZJO0FBR2xCLFNBQUssS0FBTCxHQUFjLE9BQU8sS0FBUCxDQUhJO0dBQXBCOztlQURJOzs2QkFPSyxVQUFVO0FBQ2pCLGFBQU87QUFDTCxzQkFBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaO0FBQ2Qsa0JBQWMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCLENBQWQ7QUFDQSxhQUFjLEtBQUssTUFBTCxDQUFZLE9BQVosR0FBc0IsUUFBdEI7T0FIaEIsQ0FEaUI7Ozs7eUJBUWQsVUFBVTs7O0FBQ2IsYUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOzs7O0FBSXRDLFlBQUksVUFBVSxNQUFLLFFBQUwsQ0FBYyxRQUFkLENBQVYsQ0FKa0M7O0FBTXRDLFlBQUksTUFBSyxNQUFMLENBQVksU0FBWixLQUEwQixNQUExQixFQUFrQztBQUNwQyxnQkFBSyxHQUFMLENBQVMsS0FBVCxjQUEwQixRQUFRLEdBQVIsQ0FBMUIsQ0FEb0M7QUFFcEMsNEJBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFnQixJQUFoQixFQUF5QjtBQUM1QyxnQkFBSSxHQUFKLEVBQVM7QUFDUCxxQkFBTyxHQUFQLEVBRE87YUFBVDs7O0FBRDRDLGdCQU14QyxTQUFTLFVBQVQsS0FBd0IsR0FBeEIsRUFBNkI7QUFDL0IscUJBQU8sWUFBUCxDQUQrQjthQUFqQztBQUdBLG9CQUFRLE1BQUssWUFBTCxDQUFrQixRQUFsQixFQUE0QixJQUE1QixDQUFSLEVBVDRDO1dBQXpC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QU8sS0FBUCxDQURVO09BQVY7QUFHRixhQUFPLElBQVAsQ0FOWTs7OztTQS9GVjs7O2tCQXlHUyIsImZpbGUiOiJzZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XG5cbmNsYXNzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmxvZyAgICA9IGNvbmZpZy5sb2c7XG4gICAgdGhpcy5jYWNoZSAgPSBjb25maWcuY2FjaGU7XG4gIH1cblxuICBfb3B0aW9ucyhlbmRwb2ludCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZ2VudE9wdGlvbnM6IHRoaXMuY29uZmlnLmF1dGgsXG4gICAgICB1cmlDYWNoZTogICAgIGVuZHBvaW50LnJlcGxhY2UoL1xcLy9nLCAnJyksXG4gICAgICB1cmk6ICAgICAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgKyBlbmRwb2ludFxuICAgIH07XG4gIH1cblxuICBfZ2V0KGVuZHBvaW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChmdWxmaWxsLCByZWplY3QpID0+IHtcbiAgICAgIC8vIHdpbGQgICAgbm8gbG9hZCBubyBzYXZlXG4gICAgICAvLyBkcnlydW4gIGxvYWQgbm90IHNhdmVcbiAgICAgIC8vIHJlY29yZCAgbG9hZCBhbmQgc2F2ZVxuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zKGVuZHBvaW50KTtcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLmNhY2hlTW9kZSA9PT0gJ3dpbGQnKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGB3aWxkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA0MDQgKHZzLiByZXR1cm5pbmcgaHRtbClcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdkcnlydW4nKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGBkcnlydW4gZm9yICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAncmVjb3JkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgcmVjb3JkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FjaGUud3JpdGUob3B0aW9ucy51cmlDYWNoZSwgYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfYnVpbGRSZXN1bHQocmVzcG9uc2UsIGJvZHkpIHtcbiAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgcmVzdWx0LnN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIGlmICghdGhpcy5faXNKc29uKGJvZHkpKSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gYm9keTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5kYXRhID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5kYXRhID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9pc0pzb24oZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcbiJdfQ==