import { ApmPayload } from './apm-payload.interface'
import { AppSearchPayload } from './app-search-payload.interface'
import { ElasticsearchPayload } from './elasticsearch-payload.interface'
import { KibanaPayload } from './kibana-payload.interface'

export interface DeploymentCreateResources {
  apm?: ApmPayload[]
  appsearch?: AppSearchPayload[]
  elasticsearch?: ElasticsearchPayload[]
  kibana?: KibanaPayload[]
}
