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
        uri: this.config.baseUrl + endpoint,
        uriCache: endpoint.replace(/\//g, '')
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
            if (!err) {
              if (response.statusCode === 404) {
                // special case for 404 because the Student Web Service
                // returns ugly HTML in the response body.
                body = 'Not found.';
              }
              fulfill(_this._buildResult(response, body));
            } else {
              reject(err);
            }
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
              if (!err) {
                if (response.statusCode === 404) {
                  // special case for 404 because the Student Web Service
                  // returns ugly HTML in the response body.
                  body = 'Not found.';
                }
                fulfill(_this._buildResult(response, body));
              } else {
                reject(err);
              }
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
              if (!err) {
                if (response.statusCode === 200) {
                  _this.cache.write(options.uriCache, body, true);
                } else if (response.statusCode === 404) {
                  // special case for 404 because the Student Web Service
                  // returns ugly HTML in the response body.
                  body = 'Not found.';
                }
                fulfill(_this._buildResult(response, body));
              } else {
                reject(err);
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3NlcnZpY2UuanMiXSwibmFtZXMiOlsiU2VydmljZSIsImNvbmZpZyIsImxvZyIsImNhY2hlIiwiZW5kcG9pbnQiLCJhZ2VudE9wdGlvbnMiLCJhdXRoIiwidXJpIiwiYmFzZVVybCIsInVyaUNhY2hlIiwicmVwbGFjZSIsIlByb21pc2UiLCJmdWxmaWxsIiwicmVqZWN0Iiwib3B0aW9ucyIsIl9vcHRpb25zIiwiY2FjaGVNb2RlIiwiZGVidWciLCJnZXQiLCJlcnIiLCJyZXNwb25zZSIsImJvZHkiLCJzdGF0dXNDb2RlIiwiX2J1aWxkUmVzdWx0IiwicmVhZCIsIndyaXRlIiwicmVzdWx0IiwiX2lzSnNvbiIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsTztBQUNKLG1CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBY0QsT0FBT0MsR0FBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWNGLE9BQU9FLEtBQXJCO0FBQ0Q7Ozs7NkJBRVFDLFEsRUFBVTtBQUNqQixhQUFPO0FBQ0xDLHNCQUFjLEtBQUtKLE1BQUwsQ0FBWUssSUFEckI7QUFFTEMsYUFBYyxLQUFLTixNQUFMLENBQVlPLE9BQVosR0FBc0JKLFFBRi9CO0FBR0xLLGtCQUFjTCxTQUFTTSxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEVBQXhCO0FBSFQsT0FBUDtBQUtEOzs7eUJBRUlOLFEsRUFBVTtBQUFBOztBQUNiLGFBQU8sSUFBSU8sT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxZQUFJQyxVQUFVLE1BQUtDLFFBQUwsQ0FBY1gsUUFBZCxDQUFkOztBQUVBLFlBQUksTUFBS0gsTUFBTCxDQUFZZSxTQUFaLEtBQTBCLE1BQTlCLEVBQXNDO0FB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QztBQUMvQixZQUFJLENBQUMsS0FBS0ssT0FBTCxDQUFhTixJQUFiLENBQUwsRUFBeUI7QUFDdkJLLGlCQUFPRSxPQUFQLEdBQWlCUCxJQUFqQjtBQUNELFNBRkQsTUFFTztBQUNMSyxpQkFBT0UsT0FBUCxHQUFpQkMsS0FBS0MsS0FBTCxDQUFXVCxJQUFYLENBQWpCO0FBQ0Q7QUFDREssZUFBT0ssSUFBUCxHQUFjLEVBQWQ7QUFDRCxPQVBELE1BT087QUFDTEwsZUFBT0ssSUFBUCxHQUFjRixLQUFLQyxLQUFMLENBQVdULElBQVgsQ0FBZDtBQUNEO0FBQ0QsYUFBT0ssTUFBUDtBQUNEOzs7NEJBRU9LLEksRUFBTTtBQUNaLFVBQUk7QUFDRkYsYUFBS0MsS0FBTCxDQUFXQyxJQUFYO0FBQ0QsT0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLGVBQU8sS0FBUDtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFHWWhDLE8iLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuXG5jbGFzcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5sb2cgICAgPSBjb25maWcubG9nO1xuICAgIHRoaXMuY2FjaGUgID0gY29uZmlnLmNhY2hlO1xuICB9XG5cbiAgX29wdGlvbnMoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWdlbnRPcHRpb25zOiB0aGlzLmNvbmZpZy5hdXRoLFxuICAgICAgdXJpOiAgICAgICAgICB0aGlzLmNvbmZpZy5iYXNlVXJsICsgZW5kcG9pbnQsXG4gICAgICB1cmlDYWNoZTogICAgIGVuZHBvaW50LnJlcGxhY2UoL1xcLy9nLCAnJyksXG4gICAgfTtcbiAgfVxuXG4gIF9nZXQoZW5kcG9pbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bGZpbGwsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gd2lsZCAgICBubyBsb2FkIG5vIHNhdmVcbiAgICAgIC8vIGRyeXJ1biAgbG9hZCBub3Qgc2F2ZVxuICAgICAgLy8gcmVjb3JkICBsb2FkIGFuZCBzYXZlXG4gICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMoZW5kcG9pbnQpO1xuXG4gICAgICBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAnd2lsZCcpIHtcbiAgICAgICAgdGhpcy5sb2cuZGVidWcoYHdpbGQgLS0gJHtvcHRpb25zLnVyaX1gKTtcbiAgICAgICAgcmVxdWVzdC5nZXQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcbiAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwNCkge1xuICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgIC8vIHJldHVybnMgdWdseSBIVE1MIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgICBib2R5ID0gJ05vdCBmb3VuZC4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5jYWNoZU1vZGUgPT09ICdkcnlydW4nKSB7XG4gICAgICAgIHRoaXMubG9nLmRlYnVnKGBkcnlydW4gZm9yICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciA0MDQgYmVjYXVzZSB0aGUgU3R1ZGVudCBXZWIgU2VydmljZVxuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgdWdseSBIVE1MIGluIHRoZSByZXNwb25zZSBib2R5LlxuICAgICAgICAgICAgICAgIGJvZHkgPSAnTm90IGZvdW5kLic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuY2FjaGVNb2RlID09PSAncmVjb3JkJykge1xuICAgICAgICB0aGlzLmxvZy5kZWJ1ZyhgcmVjb3JkIC0tICR7b3B0aW9ucy51cml9YCk7XG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5jYWNoZS5yZWFkKG9wdGlvbnMudXJpQ2FjaGUpO1xuICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgIGxldCByZXNwb25zZSA9IHt9O1xuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLl9idWlsZFJlc3VsdChyZXNwb25zZSwgYm9keSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcXVlc3QuZ2V0KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS53cml0ZShvcHRpb25zLnVyaUNhY2hlLCBib2R5LCB0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIDQwNCBiZWNhdXNlIHRoZSBTdHVkZW50IFdlYiBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyB1Z2x5IEhUTUwgaW4gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAgICAgICAgICAgICAgYm9keSA9ICdOb3QgZm91bmQuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmdWxmaWxsKHRoaXMuX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2J1aWxkUmVzdWx0KHJlc3BvbnNlLCBib2R5KSB7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgIHJlc3VsdC5zdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzQ29kZTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzSnNvbihib2R5KSkge1xuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGJvZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQubWVzc2FnZSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICB9XG4gICAgICByZXN1bHQuZGF0YSA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfaXNKc29uKGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG4iXX0=