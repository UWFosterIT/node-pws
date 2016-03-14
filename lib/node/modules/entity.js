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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Entity).call(this, config));
  }

  _createClass(Entity, [{
    key: 'get',
    value: function get(opt, cb) {
      this._get('entity/' + opt.id + '.json', cb);
      return;
    }
  }, {
    key: 'search',
    value: function search(opt, cb) {
      var params = {
        display_name: opt.name || '',
        is_test_entity: opt.isTest || '',
        only_entities: opt.onlyEntities || '',
        page_size: opt.size || '',
        page_start: opt.start || ''
      };

      var query = _queryString2.default.stringify(params);

      this._get('entity.json?' + query, cb);
      return;
    }
  }]);

  return Entity;
}(_service2.default);

exports.default = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2VudGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLFdBQUssSUFBTCxhQUFvQixJQUFJLEVBQUosVUFBcEIsRUFBbUMsRUFBbkMsRUFEVztBQUVYLGFBRlc7Ozs7MkJBS04sS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsc0JBQWdCLElBQUksSUFBSixJQUFvQixFQUFwQjtBQUNoQix3QkFBZ0IsSUFBSSxNQUFKLElBQW9CLEVBQXBCO0FBQ2hCLHVCQUFnQixJQUFJLFlBQUosSUFBb0IsRUFBcEI7QUFDaEIsbUJBQWdCLElBQUksSUFBSixJQUFvQixFQUFwQjtBQUNoQixvQkFBZ0IsSUFBSSxLQUFKLElBQW9CLEVBQXBCO09BTGQsQ0FEVTs7QUFTZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVRVOztBQVdkLFdBQUssSUFBTCxrQkFBeUIsS0FBekIsRUFBa0MsRUFBbEMsRUFYYztBQVlkLGFBWmM7Ozs7U0FWWjs7O2tCQTBCUyIsImZpbGUiOiJlbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgICAgICBmcm9tICdxdWVyeS1zdHJpbmcnO1xuaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICBnZXQob3B0LCBjYikge1xuICAgIHRoaXMuX2dldChgZW50aXR5LyR7b3B0LmlkfS5qc29uYCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGRpc3BsYXlfbmFtZTogICBvcHQubmFtZSAgICAgICAgIHx8ICcnLFxuICAgICAgaXNfdGVzdF9lbnRpdHk6IG9wdC5pc1Rlc3QgICAgICAgfHwgJycsXG4gICAgICBvbmx5X2VudGl0aWVzOiAgb3B0Lm9ubHlFbnRpdGllcyB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICBvcHQuc2l6ZSAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgIG9wdC5zdGFydCAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG5cbiAgICB0aGlzLl9nZXQoYGVudGl0eS5qc29uPyR7cXVlcnl9YCwgY2IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG4iXX0=