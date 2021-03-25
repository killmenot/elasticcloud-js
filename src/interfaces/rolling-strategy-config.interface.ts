export interface RollingStrategyConfig {
  allow_inline_resize?: boolean
  group_by?: string
  shard_init_wait_time?: number //int64
  skip_synced_flush?: boolean
}
