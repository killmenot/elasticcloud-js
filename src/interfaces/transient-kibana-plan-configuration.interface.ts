import { KibanaPlanControlConfiguration } from './kibana-plan-control-configuration.interface'
import { PlanStrategy } from './plan-strategy.interface'

export interface TransientKibanaPlanConfiguration {
  plan_configuration?: KibanaPlanControlConfiguration[]
  strategy: PlanStrategy
}
