import { DeploymentMetadata } from './deployment-metadata.interface'
import { DeploymentObservability } from './deployment-observability.interface'
import { DeploymentSettings } from './deployment-settings.interface'
import { DeploymentResources } from './deployment-resources.interface'

export interface DeploymentGetResponse {
  alias?: string
  healthy: boolean
  id: string
  metadata?: DeploymentMetadata
  name: string
  observability?: DeploymentObservability
  resources: DeploymentResources
  settings: DeploymentSettings
}