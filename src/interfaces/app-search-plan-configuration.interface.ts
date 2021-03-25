import { AppSearchPlanControlConfiguration } from './app-search-plan-control-configuration.interface'
import { PlanStrategy } from './plan-strategy.interface'

export interface TransientAppSearchPlanConfiguration {
  plan_configuration?: AppSearchPlanControlConfiguration
  strategy?: PlanStrategy
}
