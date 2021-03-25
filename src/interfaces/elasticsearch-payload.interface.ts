import { ElasticsearchClusterPlan } from './elasticsearch-cluster-plan.interface'
import { ElasticsearchClusterSettings } from './elasticsearch-cluster-settings.interface'

export interface ElasticsearchPayload {
  display_name?: string
  plan: ElasticsearchClusterPlan
  ref_id: string
  region: string
  settings?: ElasticsearchClusterSettings
}
