import { KibanaConfiguration } from './kibana-configuration.interface'
import { TopologySize } from './topology-size.interface'

export interface KibanaClusterTopologyElement {
  instance_configuration_id?: string
  kibana?: KibanaConfiguration
  size?: TopologySize
  zone_count?: number //int32
}
