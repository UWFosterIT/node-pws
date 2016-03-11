'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Service) {
  _inherits(Person, _Service);

  function Person(config) {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, config));
  }

  _createClass(Person, [{
    key: 'get',
    value: function get(opt, cb) {
      var full = '';
      if (opt.full) {
        full = '/full';
      }
      this._get('person/' + opt.id + full + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        development_id: opt.devid || '',
        employee_id: opt.employeeid || '',
        uwregid: opt.regid || '',
        uwnetid: opt.netid || '',
        student_number: opt.studentNumber || '',
        student_system_key: opt.syskey || 0,
        registered_surname: opt.lastName || '',
        registered_first_middle_name: opt.firstName || '',
        edupersonaffiliation_student: opt.isStudent || '',
        edupersonaffiliation_stff: opt.isStaff || '',
        edupersonaffiliation_faculty: opt.isFaculty || '',
        edupersonaffiliation_employee: opt.isEmployee || '',
        edupersonaffiliation_member: opt.isMember || '',
        edupersonaffiliation_alum: opt.isAlum || '',
        edupersonaffiliation_affiliate: opt.isAffiliate || '',
        page_size: opt.size || '',
        page_start: opt.start || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('person.json?' + query, cb);
      return;
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLFVBQUksT0FBTyxFQUFQLENBRE87QUFFWCxVQUFJLElBQUksSUFBSixFQUFVO0FBQ1osZUFBTyxPQUFQLENBRFk7T0FBZDtBQUdBLFdBQUssSUFBTCxhQUFvQixJQUFJLEVBQUosR0FBUyxjQUE3QixFQUEwQyxFQUExQyxFQUxXO0FBTVgsYUFOVzs7OzsyQkFTTixLQUFLLElBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCx3QkFBZ0MsSUFBSSxLQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHFCQUFnQyxJQUFJLFVBQUosSUFBcUIsRUFBckI7QUFDaEMsaUJBQWdDLElBQUksS0FBSixJQUFxQixFQUFyQjtBQUNoQyxpQkFBZ0MsSUFBSSxLQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHdCQUFnQyxJQUFJLGFBQUosSUFBcUIsRUFBckI7QUFDaEMsNEJBQWdDLElBQUksTUFBSixJQUFxQixDQUFyQjtBQUNoQyw0QkFBZ0MsSUFBSSxRQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHNDQUFnQyxJQUFJLFNBQUosSUFBcUIsRUFBckI7QUFDaEMsc0NBQWdDLElBQUksU0FBSixJQUFxQixFQUFyQjtBQUNoQyxtQ0FBZ0MsSUFBSSxPQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHNDQUFnQyxJQUFJLFNBQUosSUFBcUIsRUFBckI7QUFDaEMsdUNBQWdDLElBQUksVUFBSixJQUFxQixFQUFyQjtBQUNoQyxxQ0FBZ0MsSUFBSSxRQUFKLElBQXFCLEVBQXJCO0FBQ2hDLG1DQUFnQyxJQUFJLE1BQUosSUFBcUIsRUFBckI7QUFDaEMsd0NBQWdDLElBQUksV0FBSixJQUFxQixFQUFyQjtBQUNoQyxtQkFBZ0MsSUFBSSxJQUFKLElBQXFCLEVBQXJCO0FBQ2hDLG9CQUFnQyxJQUFJLEtBQUosSUFBcUIsRUFBckI7T0FqQjlCLENBRFU7O0FBcUJkLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFSLENBckJVOztBQXVCZCxXQUFLLElBQUwsa0JBQXlCLEtBQXpCLEVBQWtDLEVBQWxDLEVBdkJjO0FBd0JkLGFBeEJjOzs7O1NBZFo7OztrQkEwQ1MiLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFBlcnNvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICBsZXQgZnVsbCA9ICcnO1xuICAgIGlmIChvcHQuZnVsbCkge1xuICAgICAgZnVsbCA9ICcvZnVsbCc7XG4gICAgfVxuICAgIHRoaXMuX2dldChgcGVyc29uLyR7b3B0LmlkfSR7ZnVsbH0uanNvbmAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBkZXZlbG9wbWVudF9pZDogICAgICAgICAgICAgICAgIG9wdC5kZXZpZCAgICAgICAgIHx8ICcnLFxuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICAgICAgICAgICAgICBvcHQuZW1wbG95ZWVpZCAgICB8fCAnJyxcbiAgICAgIHV3cmVnaWQ6ICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgICAgfHwgJycsXG4gICAgICB1d25ldGlkOiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5uZXRpZCAgICAgICAgIHx8ICcnLFxuICAgICAgc3R1ZGVudF9udW1iZXI6ICAgICAgICAgICAgICAgICBvcHQuc3R1ZGVudE51bWJlciB8fCAnJyxcbiAgICAgIHN0dWRlbnRfc3lzdGVtX2tleTogICAgICAgICAgICAgb3B0LnN5c2tleSAgICAgICAgfHwgMCxcbiAgICAgIHJlZ2lzdGVyZWRfc3VybmFtZTogICAgICAgICAgICAgb3B0Lmxhc3ROYW1lICAgICAgfHwgJycsXG4gICAgICByZWdpc3RlcmVkX2ZpcnN0X21pZGRsZV9uYW1lOiAgIG9wdC5maXJzdE5hbWUgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fc3R1ZGVudDogICBvcHQuaXNTdHVkZW50ICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0ZmY6ICAgICAgb3B0LmlzU3RhZmYgICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9mYWN1bHR5OiAgIG9wdC5pc0ZhY3VsdHkgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fZW1wbG95ZWU6ICBvcHQuaXNFbXBsb3llZSAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX21lbWJlcjogICAgb3B0LmlzTWVtYmVyICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9hbHVtOiAgICAgIG9wdC5pc0FsdW0gICAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fYWZmaWxpYXRlOiBvcHQuaXNBZmZpbGlhdGUgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgb3B0LnNpemUgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgICAgIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuXG4gICAgdGhpcy5fZ2V0KGBwZXJzb24uanNvbj8ke3F1ZXJ5fWAsIGNiKTtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuIl19