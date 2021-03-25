import { ElasticsearchConfiguration } from './elasticsearch-configuration.interface'
import { ElasticsearchNodeType } from './elasticsearch-node-type.interface'
import { TopologyElementControl } from './topology-element-control.interface'
import { TopologySize } from './topology-size.interface'

export interface ElasticsearchClusterTopologyElement {
  autoscaling_max?: TopologySize
  autoscaling_min?: TopologySize[]
  autoscaling_policy_override_json?: Record<string, unknown>
  elasticsearch: ElasticsearchConfiguration
  id?: string
  instance_configuration_id?: string
  node_roles?: string[]
  node_type?: ElasticsearchNodeType[]
  size?: TopologySize
  topology_element_control?: TopologyElementControl
  zone_count?: boolean //int32
}
