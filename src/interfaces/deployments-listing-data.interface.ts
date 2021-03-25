import { DeploymentResource } from './deployment-resource.interface'

export interface DeploymentsListingData {
  id: string
  name: string
  resources: DeploymentResource[]
}
