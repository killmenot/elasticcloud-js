import { OrphanedElasticsearch } from './orphaned-elasticsearch.interface'

export interface Orphaned {
  apm: string[]
  appsearch: string[]
  elasticsearch: OrphanedElasticsearch[]
  enterprise_search: string[]
  kibana: string[]
}
