import { DeploymentCreateMetadata } from './deployment-create-metadata.interface'
import { DeploymentCreateResources } from './deployment-create-resources.interface'
import { DeploymentCreateSettings } from './deployment-create-settings.interface'

export interface DeploymentCreateRequest {
  alias?: string
  metadata?: DeploymentCreateMetadata
  name?: string
  resources: DeploymentCreateResources
  settings?: DeploymentCreateSettings
}
