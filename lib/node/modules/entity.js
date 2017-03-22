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

var Entity = function (_Service) {
  _inherits(Entity, _Service);

  function Entity(config) {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, config));
  }

  _createClass(Entity, [{
    key: 'get',
    value: function get(opt) {
      return this._get('entity/' + opt.id + '.json');
    }
  }, {
    key: 'search',
    value: function search(opt) {
      var params = {
        /* eslint-disable camelcase */
        changed_since_date: opt.changedSinceDate || '',
        display_name: opt.name || '',
        is_test_entity: opt.isTest || '',
        only_entities: opt.onlyEntities || '',
        page_size: opt.size || '',
        page_start: opt.start || ''
        /* eslint-enable camelcase */
      };

      var query = _queryString2.default.stringify(params);
      return this._get('entity.json?' + query);
    }
  }]);

  return Entity;
}(_service2.default);

exports.default = Entity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2VudGl0eS5qcyJdLCJuYW1lcyI6WyJFbnRpdHkiLCJjb25maWciLCJvcHQiLCJfZ2V0IiwiaWQiLCJwYXJhbXMiLCJjaGFuZ2VkX3NpbmNlX2RhdGUiLCJjaGFuZ2VkU2luY2VEYXRlIiwiZGlzcGxheV9uYW1lIiwibmFtZSIsImlzX3Rlc3RfZW50aXR5IiwiaXNUZXN0Iiwib25seV9lbnRpdGllcyIsIm9ubHlFbnRpdGllcyIsInBhZ2Vfc2l6ZSIsInNpemUiLCJwYWdlX3N0YXJ0Iiwic3RhcnQiLCJxdWVyeSIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSwyR0FDWkEsTUFEWTtBQUVuQjs7Ozt3QkFFR0MsRyxFQUFLO0FBQ1AsYUFBTyxLQUFLQyxJQUFMLGFBQW9CRCxJQUFJRSxFQUF4QixXQUFQO0FBQ0Q7OzsyQkFFTUYsRyxFQUFLO0FBQ1YsVUFBSUcsU0FBUztBQUNYO0FBQ0FDLDRCQUFvQkosSUFBSUssZ0JBQUosSUFBd0IsRUFGakM7QUFHWEMsc0JBQW9CTixJQUFJTyxJQUFKLElBQXdCLEVBSGpDO0FBSVhDLHdCQUFvQlIsSUFBSVMsTUFBSixJQUF3QixFQUpqQztBQUtYQyx1QkFBb0JWLElBQUlXLFlBQUosSUFBd0IsRUFMakM7QUFNWEMsbUJBQW9CWixJQUFJYSxJQUFKLElBQXdCLEVBTmpDO0FBT1hDLG9CQUFvQmQsSUFBSWUsS0FBSixJQUF3QjtBQUM1QztBQVJXLE9BQWI7O0FBV0EsVUFBSUMsUUFBUSxzQkFBR0MsU0FBSCxDQUFhZCxNQUFiLENBQVo7QUFDQSxhQUFPLEtBQUtGLElBQUwsa0JBQXlCZSxLQUF6QixDQUFQO0FBQ0Q7Ozs7OztrQkFHWWxCLE0iLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEVudGl0eSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCkge1xuICAgIHJldHVybiB0aGlzLl9nZXQoYGVudGl0eS8ke29wdC5pZH0uanNvbmApO1xuICB9XG5cbiAgc2VhcmNoKG9wdCkge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgIGNoYW5nZWRfc2luY2VfZGF0ZTogb3B0LmNoYW5nZWRTaW5jZURhdGUgfHwgJycsXG4gICAgICBkaXNwbGF5X25hbWU6ICAgICAgIG9wdC5uYW1lICAgICAgICAgICAgIHx8ICcnLFxuICAgICAgaXNfdGVzdF9lbnRpdHk6ICAgICBvcHQuaXNUZXN0ICAgICAgICAgICB8fCAnJyxcbiAgICAgIG9ubHlfZW50aXRpZXM6ICAgICAgb3B0Lm9ubHlFbnRpdGllcyAgICAgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgICAgIG9wdC5zaXplICAgICAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgICAgICBvcHQuc3RhcnQgICAgICAgICAgICB8fCAnJ1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgZW50aXR5Lmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG4iXX0=