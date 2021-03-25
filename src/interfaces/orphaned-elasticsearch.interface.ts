import { ElasticsearchDependant } from './elasticsearch-dependant.interface'

export interface OrphanedElasticsearch {
  dependents: ElasticsearchDependant[]
  id: string
}
