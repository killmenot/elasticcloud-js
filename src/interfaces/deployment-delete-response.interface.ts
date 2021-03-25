import { Orphaned } from './orphaned.interface'

export interface DeploymentDeleteResponse {
  id: string,
  name: string,
  orphaned?: Orphaned
}
