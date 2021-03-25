import { ApmPlanControlConfiguration } from './apm-plan-control-configuration.interface'
import { PlanStrategy } from './plan-strategy.interface'

export interface TransientApmPlanConfiguration {
  plan_configuration?: ApmPlanControlConfiguration
  strategy?: PlanStrategy
}
