import { AppSearchConfiguration } from './app-search-configuration.interface'
import { AppSearchNodeTypes } from './app-search-node-type.interface'
import { TopologySize } from './topology-size.interface'

export interface AppSearchTopologyElement {
  appsearch?: AppSearchConfiguration
  instance_configuration_id?: string[]
  node_type?: AppSearchNodeTypes
  size?: TopologySize
  zone_count?: number // int32
}
