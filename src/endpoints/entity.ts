import Endpoint from '../core/endpoint';
import type { IEntityResponse } from '../entities/IEntity';
import type { ISearchEntityResponse } from '../entities/ISearchEntity';

export interface IEntityGetOptions {
  id: string;
}

export interface IEntitySearchOptions {
  changedSinceDate?: string;
  name?: string;
  isTest?: string;
  onlyEntities?: string;
  pageSize?: string;
  pageStart?: string;
}

class Entity extends Endpoint {
  async get(opt: IEntityGetOptions) {
    return this.service.get<IEntityResponse>(`entity/${opt.id}.json`);
  }

  async search(opt: IEntitySearchOptions) {
    const params = {
      changed_since_date: opt.changedSinceDate || '',
      display_name: opt.name || '',
      is_test_entity: opt.isTest || '',
      only_entities: opt.onlyEntities || '',
      page_size: opt.pageSize || '',
      page_start: opt.pageStart || '',
    };

    const query = new URLSearchParams(params);
    return this.service.get<ISearchEntityResponse>(`entity.json?${query}`);
  }
}

export default Entity;
