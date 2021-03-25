import { ElasticsearchScriptingUserSettings } from './elasticsearch-scripting-user-settings.interface'

export interface ElasticsearchSystemSettings {
  auto_create_index?: boolean
  default_shards_per_index?: number // int32
  destructive_requires_name?: boolean
  enable_close_index?: boolean
  monitoring_collection_interval?: number // int32
  monitoring_history_duration?: string
  reindex_whitelist?: string[]
  scripting?: ElasticsearchScriptingUserSettings
  use_disk_threshold?: boolean
  watcher_trigger_engine?: string
}
