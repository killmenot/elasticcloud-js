import { AppSearchConfiguration } from './app-search-configuration.interface'
import { TransientAppSearchPlanConfiguration } from './app-search-plan-configuration.interface'
import { AppSearchTopologyElement } from './app-search-topology-element.interface'

export interface AppSearchPlan {
  appsearch: AppSearchConfiguration
  cluster_topology?: AppSearchTopologyElement[]
  transient?: TransientAppSearchPlanConfiguration
}
