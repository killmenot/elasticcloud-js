import { KibanaClusterPlan } from './kibana-cluster-plan.interface'
import { KibanaClusterSettings } from './kibana-cluster-settings.interface'

export interface KibanaPayload {
  display_name: string
  elasticsearch_cluster_ref_id: string
  plan: KibanaClusterPlan
  ref_id: string
  region: string
  settings?: KibanaClusterSettings
}
