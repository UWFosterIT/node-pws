let qs      = require('query-string');
let Service = require('./service');

class Entity extends Service {
  constructor(config) {
    super(config);
  }

  get(opt) {
    return this._get(`entity/${opt.id}.json`);
  }

  search(opt) {
    let params = {
      /* eslint-disable camelcase */
      changed_since_date: opt.changedSinceDate || '',
      display_name:       opt.name             || '',
      is_test_entity:     opt.isTest           || '',
      only_entities:      opt.onlyEntities     || '',
      page_size:          opt.size             || '',
      page_start:         opt.start            || ''
      /* eslint-enable camelcase */
    };

    let query = qs.stringify(params);
    return this._get(`entity.json?${query}`);
  }
}

module.exports = Entity;
