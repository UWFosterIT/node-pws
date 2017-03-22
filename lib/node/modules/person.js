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

    return _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this, config));
  }

  _createClass(Person, [{
    key: 'get',
    value: function get(opt) {
      var full = '';
      if (opt.full) {
        full = '/full';
      }

      return this._get('person/' + opt.id + full + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        /* eslint-disable camelcase */
        address: opt.address || '',
        changed_since_date: opt.changedSinceDate || '',
        department: opt.department || '',
        development_id: opt.devid || '',
        edupersonaffiliation_affiliate: opt.isAffiliate || '',
        edupersonaffiliation_alum: opt.isAlum || '',
        edupersonaffiliation_employee: opt.isEmployee || '',
        edupersonaffiliation_faculty: opt.isFaculty || '',
        edupersonaffiliation_member: opt.isMember || '',
        edupersonaffiliation_staff: opt.isStaff || '',
        edupersonaffiliation_student: opt.isStudent || '',
        email: opt.email || '',
        employee_id: opt.employeeid || '',
        first_name: opt.firstName || '',
        home_dept: opt.homeDept || '',
        last_name: opt.lastName || '',
        mail_stop: opt.mailStop || '',
        page_size: opt.size || '',
        page_start: opt.start || '',
        phone_number: opt.phoneNumber || '',
        student_number: opt.studentNumber || '',
        student_system_key: opt.syskey || '',
        title: opt.title || '',
        uwnetid: opt.netid || '',
        uwregid: opt.regid || '',
        verbose: opt.verbose || ''
      };

      var query = _queryString2.default.stringify(params);
      return this._get('person.json?' + query);
    }
  }]);

  return Person;
}(_service2.default);

exports.default = Person;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6WyJQZXJzb24iLCJjb25maWciLCJvcHQiLCJmdWxsIiwiX2dldCIsImlkIiwicGFyYW1zIiwiYWRkcmVzcyIsImNoYW5nZWRfc2luY2VfZGF0ZSIsImNoYW5nZWRTaW5jZURhdGUiLCJkZXBhcnRtZW50IiwiZGV2ZWxvcG1lbnRfaWQiLCJkZXZpZCIsImVkdXBlcnNvbmFmZmlsaWF0aW9uX2FmZmlsaWF0ZSIsImlzQWZmaWxpYXRlIiwiZWR1cGVyc29uYWZmaWxpYXRpb25fYWx1bSIsImlzQWx1bSIsImVkdXBlcnNvbmFmZmlsaWF0aW9uX2VtcGxveWVlIiwiaXNFbXBsb3llZSIsImVkdXBlcnNvbmFmZmlsaWF0aW9uX2ZhY3VsdHkiLCJpc0ZhY3VsdHkiLCJlZHVwZXJzb25hZmZpbGlhdGlvbl9tZW1iZXIiLCJpc01lbWJlciIsImVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0YWZmIiwiaXNTdGFmZiIsImVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0dWRlbnQiLCJpc1N0dWRlbnQiLCJlbWFpbCIsImVtcGxveWVlX2lkIiwiZW1wbG95ZWVpZCIsImZpcnN0X25hbWUiLCJmaXJzdE5hbWUiLCJob21lX2RlcHQiLCJob21lRGVwdCIsImxhc3RfbmFtZSIsImxhc3ROYW1lIiwibWFpbF9zdG9wIiwibWFpbFN0b3AiLCJwYWdlX3NpemUiLCJzaXplIiwicGFnZV9zdGFydCIsInN0YXJ0IiwicGhvbmVfbnVtYmVyIiwicGhvbmVOdW1iZXIiLCJzdHVkZW50X251bWJlciIsInN0dWRlbnROdW1iZXIiLCJzdHVkZW50X3N5c3RlbV9rZXkiLCJzeXNrZXkiLCJ0aXRsZSIsInV3bmV0aWQiLCJuZXRpZCIsInV3cmVnaWQiLCJyZWdpZCIsInZlcmJvc2UiLCJxdWVyeSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSwyR0FDWkEsTUFEWTtBQUVuQjs7Ozt3QkFFR0MsRyxFQUFLO0FBQ1AsVUFBSUMsT0FBTyxFQUFYO0FBQ0EsVUFBSUQsSUFBSUMsSUFBUixFQUFjO0FBQ1pBLGVBQU8sT0FBUDtBQUNEOztBQUVELGFBQU8sS0FBS0MsSUFBTCxhQUFvQkYsSUFBSUcsRUFBeEIsR0FBNkJGLElBQTdCLFdBQVA7QUFDRDs7OzJCQUVNRCxHLEVBQUs7QUFDVixVQUFJSSxTQUFTO0FBQ1g7QUFDQUMsaUJBQWdDTCxJQUFJSyxPQUFKLElBQXdCLEVBRjdDO0FBR1hDLDRCQUFnQ04sSUFBSU8sZ0JBQUosSUFBd0IsRUFIN0M7QUFJWEMsb0JBQWdDUixJQUFJUSxVQUFKLElBQXdCLEVBSjdDO0FBS1hDLHdCQUFnQ1QsSUFBSVUsS0FBSixJQUF3QixFQUw3QztBQU1YQyx3Q0FBZ0NYLElBQUlZLFdBQUosSUFBd0IsRUFON0M7QUFPWEMsbUNBQWdDYixJQUFJYyxNQUFKLElBQXdCLEVBUDdDO0FBUVhDLHVDQUFnQ2YsSUFBSWdCLFVBQUosSUFBd0IsRUFSN0M7QUFTWEMsc0NBQWdDakIsSUFBSWtCLFNBQUosSUFBd0IsRUFUN0M7QUFVWEMscUNBQWdDbkIsSUFBSW9CLFFBQUosSUFBd0IsRUFWN0M7QUFXWEMsb0NBQWdDckIsSUFBSXNCLE9BQUosSUFBd0IsRUFYN0M7QUFZWEMsc0NBQWdDdkIsSUFBSXdCLFNBQUosSUFBd0IsRUFaN0M7QUFhWEMsZUFBZ0N6QixJQUFJeUIsS0FBSixJQUF3QixFQWI3QztBQWNYQyxxQkFBZ0MxQixJQUFJMkIsVUFBSixJQUF3QixFQWQ3QztBQWVYQyxvQkFBZ0M1QixJQUFJNkIsU0FBSixJQUF3QixFQWY3QztBQWdCWEMsbUJBQWdDOUIsSUFBSStCLFFBQUosSUFBd0IsRUFoQjdDO0FBaUJYQyxtQkFBZ0NoQyxJQUFJaUMsUUFBSixJQUF3QixFQWpCN0M7QUFrQlhDLG1CQUFnQ2xDLElBQUltQyxRQUFKLElBQXdCLEVBbEI3QztBQW1CWEMsbUJBQWdDcEMsSUFBSXFDLElBQUosSUFBd0IsRUFuQjdDO0FBb0JYQyxvQkFBZ0N0QyxJQUFJdUMsS0FBSixJQUF3QixFQXBCN0M7QUFxQlhDLHNCQUFnQ3hDLElBQUl5QyxXQUFKLElBQXdCLEVBckI3QztBQXNCWEMsd0JBQWdDMUMsSUFBSTJDLGFBQUosSUFBd0IsRUF0QjdDO0FBdUJYQyw0QkFBZ0M1QyxJQUFJNkMsTUFBSixJQUF3QixFQXZCN0M7QUF3QlhDLGVBQWdDOUMsSUFBSThDLEtBQUosSUFBd0IsRUF4QjdDO0FBeUJYQyxpQkFBZ0MvQyxJQUFJZ0QsS0FBSixJQUF3QixFQXpCN0M7QUEwQlhDLGlCQUFnQ2pELElBQUlrRCxLQUFKLElBQXdCLEVBMUI3QztBQTJCWEMsaUJBQWdDbkQsSUFBSW1ELE9BQUosSUFBd0I7QUEzQjdDLE9BQWI7O0FBK0JBLFVBQUlDLFFBQVEsc0JBQUdDLFNBQUgsQ0FBYWpELE1BQWIsQ0FBWjtBQUNBLGFBQU8sS0FBS0YsSUFBTCxrQkFBeUJrRCxLQUF6QixDQUFQO0FBQ0Q7Ozs7OztrQkFHWXRELE0iLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIFBlcnNvbiBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIGxldCBmdWxsID0gJyc7XG4gICAgaWYgKG9wdC5mdWxsKSB7XG4gICAgICBmdWxsID0gJy9mdWxsJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24vJHtvcHQuaWR9JHtmdWxsfS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0KSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgICAgYWRkcmVzczogICAgICAgICAgICAgICAgICAgICAgICBvcHQuYWRkcmVzcyAgICAgICAgICB8fCAnJyxcbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogICAgICAgICAgICAgb3B0LmNoYW5nZWRTaW5jZURhdGUgfHwgJycsXG4gICAgICBkZXBhcnRtZW50OiAgICAgICAgICAgICAgICAgICAgIG9wdC5kZXBhcnRtZW50ICAgICAgIHx8ICcnLFxuICAgICAgZGV2ZWxvcG1lbnRfaWQ6ICAgICAgICAgICAgICAgICBvcHQuZGV2aWQgICAgICAgICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX2FmZmlsaWF0ZTogb3B0LmlzQWZmaWxpYXRlICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9hbHVtOiAgICAgIG9wdC5pc0FsdW0gICAgICAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fZW1wbG95ZWU6ICBvcHQuaXNFbXBsb3llZSAgICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX2ZhY3VsdHk6ICAgb3B0LmlzRmFjdWx0eSAgICAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9tZW1iZXI6ICAgIG9wdC5pc01lbWJlciAgICAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fc3RhZmY6ICAgICBvcHQuaXNTdGFmZiAgICAgICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0dWRlbnQ6ICAgb3B0LmlzU3R1ZGVudCAgICAgICAgfHwgJycsXG4gICAgICBlbWFpbDogICAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5lbWFpbCAgICAgICAgICAgIHx8ICcnLFxuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICAgICAgICAgICAgICBvcHQuZW1wbG95ZWVpZCAgICAgICB8fCAnJyxcbiAgICAgIGZpcnN0X25hbWU6ICAgICAgICAgICAgICAgICAgICAgb3B0LmZpcnN0TmFtZSAgICAgICAgfHwgJycsXG4gICAgICBob21lX2RlcHQ6ICAgICAgICAgICAgICAgICAgICAgIG9wdC5ob21lRGVwdCAgICAgICAgIHx8ICcnLFxuICAgICAgbGFzdF9uYW1lOiAgICAgICAgICAgICAgICAgICAgICBvcHQubGFzdE5hbWUgICAgICAgICB8fCAnJyxcbiAgICAgIG1haWxfc3RvcDogICAgICAgICAgICAgICAgICAgICAgb3B0Lm1haWxTdG9wICAgICAgICAgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgICAgICAgIG9wdC5zaXplICAgICAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgICAgICAgICBvcHQuc3RhcnQgICAgICAgICAgICB8fCAnJyxcbiAgICAgIHBob25lX251bWJlcjogICAgICAgICAgICAgICAgICAgb3B0LnBob25lTnVtYmVyICAgICAgfHwgJycsXG4gICAgICBzdHVkZW50X251bWJlcjogICAgICAgICAgICAgICAgIG9wdC5zdHVkZW50TnVtYmVyICAgIHx8ICcnLFxuICAgICAgc3R1ZGVudF9zeXN0ZW1fa2V5OiAgICAgICAgICAgICBvcHQuc3lza2V5ICAgICAgICAgICB8fCAnJyxcbiAgICAgIHRpdGxlOiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnRpdGxlICAgICAgICAgICAgfHwgJycsXG4gICAgICB1d25ldGlkOiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5uZXRpZCAgICAgICAgICAgIHx8ICcnLFxuICAgICAgdXdyZWdpZDogICAgICAgICAgICAgICAgICAgICAgICBvcHQucmVnaWQgICAgICAgICAgICB8fCAnJyxcbiAgICAgIHZlcmJvc2U6ICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnZlcmJvc2UgICAgICAgICAgfHwgJycsXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcbiJdfQ==