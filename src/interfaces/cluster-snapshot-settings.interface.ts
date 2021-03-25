import { ClusterSnapshotRetention } from './cluster-snapshot-retention.interface'

export interface ClusterSnapshotSettings {
  cron_expression?: string
  interval?: string
  retention?: ClusterSnapshotRetention
  slm?: boolean
}
