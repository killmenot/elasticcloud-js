import { RemoteResourceInfo } from './remote-resource-info.interface'

export interface RemoteResourceRef {
  alias: string
  deployment_id: string
  elasticsearch_ref_id: string
  info?: RemoteResourceInfo
  skip_unavailable?: boolean
}
