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

      return this._get('person/' + opt.id + full + '.json');
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
        student_system_key: opt.syskey || '',
        registered_surname: opt.lastName || '',
        registered_first_middle_name: opt.firstName || '',
        edupersonaffiliation_student: opt.isStudent || '',
        edupersonaffiliation_staff: opt.isStaff || '',
        edupersonaffiliation_faculty: opt.isFaculty || '',
        edupersonaffiliation_employee: opt.isEmployee || '',
        edupersonaffiliation_member: opt.isMember || '',
        edupersonaffiliation_alum: opt.isAlum || '',
        edupersonaffiliation_affiliate: opt.isAffiliate || '',
        page_size: opt.size || '',
        page_start: opt.start || ''
      };

      var query = _queryString2.default.stringify(params);
      return this._get('person.json?' + query);
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLFVBQUksT0FBTyxFQUFQLENBRE87QUFFWCxVQUFJLElBQUksSUFBSixFQUFVO0FBQ1osZUFBTyxPQUFQLENBRFk7T0FBZDs7QUFJQSxhQUFPLEtBQUssSUFBTCxhQUFvQixJQUFJLEVBQUosR0FBUyxjQUE3QixDQUFQLENBTlc7Ozs7MkJBU04sS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsd0JBQWdDLElBQUksS0FBSixJQUFxQixFQUFyQjtBQUNoQyxxQkFBZ0MsSUFBSSxVQUFKLElBQXFCLEVBQXJCO0FBQ2hDLGlCQUFnQyxJQUFJLEtBQUosSUFBcUIsRUFBckI7QUFDaEMsaUJBQWdDLElBQUksS0FBSixJQUFxQixFQUFyQjtBQUNoQyx3QkFBZ0MsSUFBSSxhQUFKLElBQXFCLEVBQXJCO0FBQ2hDLDRCQUFnQyxJQUFJLE1BQUosSUFBcUIsRUFBckI7QUFDaEMsNEJBQWdDLElBQUksUUFBSixJQUFxQixFQUFyQjtBQUNoQyxzQ0FBZ0MsSUFBSSxTQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHNDQUFnQyxJQUFJLFNBQUosSUFBcUIsRUFBckI7QUFDaEMsb0NBQWdDLElBQUksT0FBSixJQUFxQixFQUFyQjtBQUNoQyxzQ0FBZ0MsSUFBSSxTQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHVDQUFnQyxJQUFJLFVBQUosSUFBcUIsRUFBckI7QUFDaEMscUNBQWdDLElBQUksUUFBSixJQUFxQixFQUFyQjtBQUNoQyxtQ0FBZ0MsSUFBSSxNQUFKLElBQXFCLEVBQXJCO0FBQ2hDLHdDQUFnQyxJQUFJLFdBQUosSUFBcUIsRUFBckI7QUFDaEMsbUJBQWdDLElBQUksSUFBSixJQUFxQixFQUFyQjtBQUNoQyxvQkFBZ0MsSUFBSSxLQUFKLElBQXFCLEVBQXJCO09BakI5QixDQURVOztBQXFCZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQXJCVTtBQXNCZCxhQUFPLEtBQUssSUFBTCxrQkFBeUIsS0FBekIsQ0FBUCxDQXRCYzs7OztTQWRaOzs7a0JBd0NTIiwiZmlsZSI6InBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgbGV0IGZ1bGwgPSAnJztcbiAgICBpZiAob3B0LmZ1bGwpIHtcbiAgICAgIGZ1bGwgPSAnL2Z1bGwnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi8ke29wdC5pZH0ke2Z1bGx9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGRldmVsb3BtZW50X2lkOiAgICAgICAgICAgICAgICAgb3B0LmRldmlkICAgICAgICAgfHwgJycsXG4gICAgICBlbXBsb3llZV9pZDogICAgICAgICAgICAgICAgICAgIG9wdC5lbXBsb3llZWlkICAgIHx8ICcnLFxuICAgICAgdXdyZWdpZDogICAgICAgICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICB8fCAnJyxcbiAgICAgIHV3bmV0aWQ6ICAgICAgICAgICAgICAgICAgICAgICAgb3B0Lm5ldGlkICAgICAgICAgfHwgJycsXG4gICAgICBzdHVkZW50X251bWJlcjogICAgICAgICAgICAgICAgIG9wdC5zdHVkZW50TnVtYmVyIHx8ICcnLFxuICAgICAgc3R1ZGVudF9zeXN0ZW1fa2V5OiAgICAgICAgICAgICBvcHQuc3lza2V5ICAgICAgICB8fCAnJyxcbiAgICAgIHJlZ2lzdGVyZWRfc3VybmFtZTogICAgICAgICAgICAgb3B0Lmxhc3ROYW1lICAgICAgfHwgJycsXG4gICAgICByZWdpc3RlcmVkX2ZpcnN0X21pZGRsZV9uYW1lOiAgIG9wdC5maXJzdE5hbWUgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fc3R1ZGVudDogICBvcHQuaXNTdHVkZW50ICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0YWZmOiAgICAgb3B0LmlzU3RhZmYgICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9mYWN1bHR5OiAgIG9wdC5pc0ZhY3VsdHkgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fZW1wbG95ZWU6ICBvcHQuaXNFbXBsb3llZSAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX21lbWJlcjogICAgb3B0LmlzTWVtYmVyICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9hbHVtOiAgICAgIG9wdC5pc0FsdW0gICAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fYWZmaWxpYXRlOiBvcHQuaXNBZmZpbGlhdGUgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICAgICAgICAgICAgICAgICAgb3B0LnNpemUgICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3N0YXJ0OiAgICAgICAgICAgICAgICAgICAgIG9wdC5zdGFydCAgICAgICAgIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLl9nZXQoYHBlcnNvbi5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uO1xuIl19