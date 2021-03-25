import { KibanaClusterTopologyElement } from './kibana-cluster-topology-element.interface'
import { KibanaConfiguration } from './kibana-configuration.interface'
import { TransientKibanaPlanConfiguration } from './transient-kibana-plan-configuration.interface'

export interface KibanaClusterPlan {
  cluster_topology?: KibanaClusterTopologyElement[]
  kibana: KibanaConfiguration
  transient?: TransientKibanaPlanConfiguration
}
