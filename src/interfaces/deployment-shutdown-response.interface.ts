import { Orphaned } from './orphaned.interface'

export interface DeploymentShutdownResponse {
  id: string
  name: string
  orphaned?: Orphaned
}
