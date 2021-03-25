import { AccountTrustRelationship } from './account-trust-relationship.interface'
import { ExternalTrustRelationship } from './external-trust-relationship.interface'

export interface ElasticsearchClusterTrustSettings {
  accounts?: AccountTrustRelationship[]
  external?: ExternalTrustRelationship[]
}
