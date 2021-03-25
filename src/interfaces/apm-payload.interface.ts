import { ApmPlan } from './apm-plan.interface'
import { ApmSettings } from './apm-settings.interface'

export interface ApmPayload {
  display_name?: string
  elasticsearch_cluster_ref_id: string
  plan: ApmPlan
  ref_id: string
  region: string
  settings?: ApmSettings
}
