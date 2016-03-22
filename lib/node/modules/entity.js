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
      return this._get('entity/' + opt.id + '.json');
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
      return this._get('entity.json?' + query);
    }
  }]);

  return Entity;
}(_service2.default);

exports.default = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2VudGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNOzs7QUFDSixXQURJLE1BQ0osQ0FBWSxNQUFaLEVBQW9COzBCQURoQixRQUNnQjs7a0VBRGhCLG1CQUVJLFNBRFk7R0FBcEI7O2VBREk7O3dCQUtBLEtBQUssSUFBSTtBQUNYLGFBQU8sS0FBSyxJQUFMLGFBQW9CLElBQUksRUFBSixVQUFwQixDQUFQLENBRFc7Ozs7MkJBSU4sS0FBSyxJQUFJO0FBQ2QsVUFBSSxTQUFTO0FBQ1gsc0JBQWdCLElBQUksSUFBSixJQUFvQixFQUFwQjtBQUNoQix3QkFBZ0IsSUFBSSxNQUFKLElBQW9CLEVBQXBCO0FBQ2hCLHVCQUFnQixJQUFJLFlBQUosSUFBb0IsRUFBcEI7QUFDaEIsbUJBQWdCLElBQUksSUFBSixJQUFvQixFQUFwQjtBQUNoQixvQkFBZ0IsSUFBSSxLQUFKLElBQW9CLEVBQXBCO09BTGQsQ0FEVTs7QUFTZCxVQUFJLFFBQVEsc0JBQUcsU0FBSCxDQUFhLE1BQWIsQ0FBUixDQVRVO0FBVWQsYUFBTyxLQUFLLElBQUwsa0JBQXlCLEtBQXpCLENBQVAsQ0FWYzs7OztTQVRaOzs7a0JBdUJTIiwiZmlsZSI6ImVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyAgICAgIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5jbGFzcyBFbnRpdHkgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIGdldChvcHQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgZW50aXR5LyR7b3B0LmlkfS5qc29uYCk7XG4gIH1cblxuICBzZWFyY2gob3B0LCBjYikge1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBkaXNwbGF5X25hbWU6ICAgb3B0Lm5hbWUgICAgICAgICB8fCAnJyxcbiAgICAgIGlzX3Rlc3RfZW50aXR5OiBvcHQuaXNUZXN0ICAgICAgIHx8ICcnLFxuICAgICAgb25seV9lbnRpdGllczogIG9wdC5vbmx5RW50aXRpZXMgfHwgJycsXG4gICAgICBwYWdlX3NpemU6ICAgICAgb3B0LnNpemUgICAgICAgICB8fCAnJyxcbiAgICAgIHBhZ2Vfc3RhcnQ6ICAgICBvcHQuc3RhcnQgICAgICAgIHx8ICcnXG4gICAgfTtcblxuICAgIGxldCBxdWVyeSA9IHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLl9nZXQoYGVudGl0eS5qc29uPyR7cXVlcnl9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5O1xuIl19