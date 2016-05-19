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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2VudGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLE07OztBQUNKLGtCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFBQSxxRkFDWixNQURZO0FBRW5COzs7O3dCQUVHLEcsRUFBSyxFLEVBQUk7QUFDWCxhQUFPLEtBQUssSUFBTCxhQUFvQixJQUFJLEVBQXhCLFdBQVA7QUFDRDs7OzJCQUVNLEcsRUFBSyxFLEVBQUk7QUFDZCxVQUFJLFNBQVM7QUFDWCxzQkFBZ0IsSUFBSSxJQUFKLElBQW9CLEVBRHpCO0FBRVgsd0JBQWdCLElBQUksTUFBSixJQUFvQixFQUZ6QjtBQUdYLHVCQUFnQixJQUFJLFlBQUosSUFBb0IsRUFIekI7QUFJWCxtQkFBZ0IsSUFBSSxJQUFKLElBQW9CLEVBSnpCO0FBS1gsb0JBQWdCLElBQUksS0FBSixJQUFvQjtBQUx6QixPQUFiOztBQVFBLFVBQUksUUFBUSxzQkFBRyxTQUFILENBQWEsTUFBYixDQUFaO0FBQ0EsYUFBTyxLQUFLLElBQUwsa0JBQXlCLEtBQXpCLENBQVA7QUFDRDs7Ozs7O2tCQUdZLE0iLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzICAgICAgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmNsYXNzIEVudGl0eSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgZ2V0KG9wdCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0KGBlbnRpdHkvJHtvcHQuaWR9Lmpzb25gKTtcbiAgfVxuXG4gIHNlYXJjaChvcHQsIGNiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgIGRpc3BsYXlfbmFtZTogICBvcHQubmFtZSAgICAgICAgIHx8ICcnLFxuICAgICAgaXNfdGVzdF9lbnRpdHk6IG9wdC5pc1Rlc3QgICAgICAgfHwgJycsXG4gICAgICBvbmx5X2VudGl0aWVzOiAgb3B0Lm9ubHlFbnRpdGllcyB8fCAnJyxcbiAgICAgIHBhZ2Vfc2l6ZTogICAgICBvcHQuc2l6ZSAgICAgICAgIHx8ICcnLFxuICAgICAgcGFnZV9zdGFydDogICAgIG9wdC5zdGFydCAgICAgICAgfHwgJydcbiAgICB9O1xuXG4gICAgbGV0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuX2dldChgZW50aXR5Lmpzb24/JHtxdWVyeX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG4iXX0=