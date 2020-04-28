const qs = require('query-string');
const Service = require('./service');

class Entity extends Service {
  get(opt) {
    return super.get(`entity/${opt.id}.json`);
  }

  search(opt) {
    const params = {
      /* eslint-disable camelcase */
      changed_since_date: opt.changedSinceDate || '',
      display_name: opt.name || '',
      is_test_entity: opt.isTest || '',
      only_entities: opt.onlyEntities || '',
      page_size: opt.size || '',
      page_start: opt.start || '',
      /* eslint-enable camelcase */
    };

    const query = qs.stringify(params);
    return super.get(`entity.json?${query}`);
  }
}

module.exports = Entity;
