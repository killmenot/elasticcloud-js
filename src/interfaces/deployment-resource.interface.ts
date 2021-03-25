import { ClusterCredentials } from './cluster-credentials.interface'
import { ReplyWarning } from './reply-warning.interface'

export interface DeploymentResource {
  cloud_id?: string
  credentials?: ClusterCredentials
  elasticsearch_cluster_ref_id?: string
  id: string
  kind: string
  ref_id: string
  region: string
  secret_token?: string
  warnings?: ReplyWarning[]
}