import { AppSearchPlan } from './app-search-plan.interface'
import { AppSearchSettings } from './app-search-settings.interface'

export interface AppSearchPayload {
  display_name?: string
  elasticsearch_cluster_ref_id: string
  plan: AppSearchPlan
  ref_id: string
  settings?: AppSearchSettings
}
