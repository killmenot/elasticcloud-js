import { ApmConfiguration } from './apm-configuration.interface'
import { ApmTopologyElement } from './apm-topology-element.interface'
import { TransientApmPlanConfiguration } from './transient-apm-plan-configuration.interface'

export interface ApmPlan {
  apm: ApmConfiguration
  cluster_topology?: ApmTopologyElement[]
  transient?: TransientApmPlanConfiguration
}
