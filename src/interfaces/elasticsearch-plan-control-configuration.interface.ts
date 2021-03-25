export interface ElasticsearchPlanControlConfiguration {
  calm_wait_time?: number //int64
  cluster_reboot?: string //forced
  extended_maintenance?: boolean
  max_snapshot_age?: number //int64
  max_snapshot_attempts?: number //int32
  skip_snapshot?: boolean
  timeout?: number //int64
}
