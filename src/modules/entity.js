import qs      from 'query-string';
import Service from './service';

class Entity extends Service {
  constructor(config) {
    super(config);
  }

  get(opt, cb) {
    return this._get(`entity/${opt.id}.json`);
  }

  search(opt, cb) {
    let params = {
      display_name:   opt.name         || '',
      is_test_entity: opt.isTest       || '',
      only_entities:  opt.onlyEntities || '',
      page_size:      opt.size         || '',
      page_start:     opt.start        || ''
    };

    let query = qs.stringify(params);
    return this._get(`entity.json?${query}`);
  }
}

export default Entity;
