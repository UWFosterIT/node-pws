import Endpoint from '../core/endpoint.js';
import type { IEntityResponse } from '../entities/IEntity.js';
import type { ISearchEntityResponse } from '../entities/ISearchEntity.js';

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
    const result = await this.service.get<IEntityResponse>(`entity/${opt.id}.json`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
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
    const result = await this.service.get<ISearchEntityResponse>(`entity.json?${query}`);

    if (Endpoint.isApiError(result.data)) {
      throw new Error(result.data.description);
    }

    return result.data;
  }
}

export default Entity;
