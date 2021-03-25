import { ApmConfiguration } from './apm-configuration.interface'
import { TopologySize } from './topology-size.interface'

export interface ApmTopologyElement {
  apm?: ApmConfiguration
  instance_configuration_id?: string
  size?: TopologySize
  zone_count?: number // int32
}
