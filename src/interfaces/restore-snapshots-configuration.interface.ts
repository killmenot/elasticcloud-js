import { RestoreSnapshotApiConfiguration } from './restore-snapshots-api-configuration.interface'
import { RestoreSnapshotRepoConfiguration } from './restore-snapshots-repo-configuration.interface'

export interface RestoreSnapshotConfiguration {
  repository_config?: RestoreSnapshotRepoConfiguration
  repository_name?: string
  restore_payload?: RestoreSnapshotApiConfiguration
  snapshot_name: string
  source_cluster_id?: string
  strategy?: string //partial, full, recovery
}
