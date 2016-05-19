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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL3BlcnNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLE07OztBQUNKLGtCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFBQSxxRkFDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSyxFLEVBQUk7QUFDWCxVQUFJLE9BQU8sRUFBWDtBQUNBLFVBQUksSUFBSSxJQUFSLEVBQWM7QUFDWixlQUFPLE9BQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUssSUFBTCxhQUFvQixJQUFJLEVBQXhCLEdBQTZCLElBQTdCLFdBQVA7QUFDRDs7OzJCQUVNLEcsRUFBSyxFLEVBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCx3QkFBZ0MsSUFBSSxLQUFKLElBQXFCLEVBRDFDO0FBRVgscUJBQWdDLElBQUksVUFBSixJQUFxQixFQUYxQztBQUdYLGlCQUFnQyxJQUFJLEtBQUosSUFBcUIsRUFIMUM7QUFJWCxpQkFBZ0MsSUFBSSxLQUFKLElBQXFCLEVBSjFDO0FBS1gsd0JBQWdDLElBQUksYUFBSixJQUFxQixFQUwxQztBQU1YLDRCQUFnQyxJQUFJLE1BQUosSUFBcUIsRUFOMUM7QUFPWCw0QkFBZ0MsSUFBSSxRQUFKLElBQXFCLEVBUDFDO0FBUVgsc0NBQWdDLElBQUksU0FBSixJQUFxQixFQVIxQztBQVNYLHNDQUFnQyxJQUFJLFNBQUosSUFBcUIsRUFUMUM7QUFVWCxvQ0FBZ0MsSUFBSSxPQUFKLElBQXFCLEVBVjFDO0FBV1gsc0NBQWdDLElBQUksU0FBSixJQUFxQixFQVgxQztBQVlYLHVDQUFnQyxJQUFJLFVBQUosSUFBcUIsRUFaMUM7QUFhWCxxQ0FBZ0MsSUFBSSxRQUFKLElBQXFCLEVBYjFDO0FBY1gsbUNBQWdDLElBQUksTUFBSixJQUFxQixFQWQxQztBQWVYLHdDQUFnQyxJQUFJLFdBQUosSUFBcUIsRUFmMUM7QUFnQlgsbUJBQWdDLElBQUksSUFBSixJQUFxQixFQWhCMUM7QUFpQlgsb0JBQWdDLElBQUksS0FBSixJQUFxQjtBQWpCMUMsT0FBYjs7QUFvQkEsVUFBSSxRQUFRLHNCQUFHLFNBQUgsQ0FBYSxNQUFiLENBQVo7QUFDQSxhQUFPLEtBQUssSUFBTCxrQkFBeUIsS0FBekIsQ0FBUDtBQUNEOzs7Ozs7a0JBR1ksTSIsImZpbGUiOiJwZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgUGVyc29uIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIGxldCBmdWxsID0gJyc7XG4gICAgaWYgKG9wdC5mdWxsKSB7XG4gICAgICBmdWxsID0gJy9mdWxsJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24vJHtvcHQuaWR9JHtmdWxsfS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBkZXZlbG9wbWVudF9pZDogICAgICAgICAgICAgICAgIG9wdC5kZXZpZCAgICAgICAgIHx8ICcnLFxuICAgICAgZW1wbG95ZWVfaWQ6ICAgICAgICAgICAgICAgICAgICBvcHQuZW1wbG95ZWVpZCAgICB8fCAnJyxcbiAgICAgIHV3cmVnaWQ6ICAgICAgICAgICAgICAgICAgICAgICAgb3B0LnJlZ2lkICAgICAgICAgfHwgJycsXG4gICAgICB1d25ldGlkOiAgICAgICAgICAgICAgICAgICAgICAgIG9wdC5uZXRpZCAgICAgICAgIHx8ICcnLFxuICAgICAgc3R1ZGVudF9udW1iZXI6ICAgICAgICAgICAgICAgICBvcHQuc3R1ZGVudE51bWJlciB8fCAnJyxcbiAgICAgIHN0dWRlbnRfc3lzdGVtX2tleTogICAgICAgICAgICAgb3B0LnN5c2tleSAgICAgICAgfHwgJycsXG4gICAgICByZWdpc3RlcmVkX3N1cm5hbWU6ICAgICAgICAgICAgIG9wdC5sYXN0TmFtZSAgICAgIHx8ICcnLFxuICAgICAgcmVnaXN0ZXJlZF9maXJzdF9taWRkbGVfbmFtZTogICBvcHQuZmlyc3ROYW1lICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX3N0dWRlbnQ6ICAgb3B0LmlzU3R1ZGVudCAgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9zdGFmZjogICAgIG9wdC5pc1N0YWZmICAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fZmFjdWx0eTogICBvcHQuaXNGYWN1bHR5ICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX2VtcGxveWVlOiAgb3B0LmlzRW1wbG95ZWUgICAgfHwgJycsXG4gICAgICBlZHVwZXJzb25hZmZpbGlhdGlvbl9tZW1iZXI6ICAgIG9wdC5pc01lbWJlciAgICAgIHx8ICcnLFxuICAgICAgZWR1cGVyc29uYWZmaWxpYXRpb25fYWx1bTogICAgICBvcHQuaXNBbHVtICAgICAgICB8fCAnJyxcbiAgICAgIGVkdXBlcnNvbmFmZmlsaWF0aW9uX2FmZmlsaWF0ZTogb3B0LmlzQWZmaWxpYXRlICAgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgICAgICAgICAgICAgIG9wdC5zaXplICAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICAgICAgICAgICAgICBvcHQuc3RhcnQgICAgICAgICB8fCAnJ1xuICAgIH07XG5cbiAgICBsZXQgcXVlcnkgPSBxcy5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBwZXJzb24uanNvbj8ke3F1ZXJ5fWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbjtcbiJdfQ==