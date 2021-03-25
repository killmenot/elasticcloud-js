import { ElasticsearchPlanControlConfiguration } from './elasticsearch-plan-control-configuration.interface'
import { PlanStrategy } from './plan-strategy.interface'
import { RemoteResources } from './remote-resources.interface'
import { RestoreSnapshotConfiguration } from './restore-snapshots-configuration.interface'

export interface TransientElasticsearchPlanConfiguration {
  cluster_settings_json?: Record<string, unknown>
  plan_configuration: ElasticsearchPlanControlConfiguration
  remote_clusters?: RemoteResources
  restore_snapshot: RestoreSnapshotConfiguration
  strategy?: PlanStrategy
}
