export interface ApmPlanControlConfiguration {
  calm_wait_time?: number //int64
  cluster_reboot?: string //forced
  extended_maintenance?: boolean
  timeout?: number //int64
}
