import { AllocatorMoveRequest } from './allocator-move-request.interface'
import { InstanceMoveRequest } from './instance-move-request.interface'

export interface AppSearchPlanControlConfiguration {
  calm_wait_time?: number //int64
  cluster_reboot?: string //force
  extended_maintenance?: boolean
  move_allocators?: AllocatorMoveRequest[]
  move_instances?: InstanceMoveRequest[]
  preferred_allocators?: string[]
  reallocate_instances?: boolean
  timeout?: number //int64
}
