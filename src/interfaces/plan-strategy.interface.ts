import { AutodetectStrategyConfig } from './autodetect-strategy-config.interface'
import { GrowShrinkStrategyConfig } from './grow-shrink-strategy-config.interface'
import { RollingGrowShrinkStrategyConfig } from './rolling-grow-shrink-strategy-config.interface'
import { RollingStrategyConfig } from './rolling-strategy-config.interface'

export interface PlanStrategy {
  autodetect?: AutodetectStrategyConfig
  grow_and_shrink?: GrowShrinkStrategyConfig
  rolling?: RollingStrategyConfig
  rolling_grow_and_shrink?: RollingGrowShrinkStrategyConfig
}
