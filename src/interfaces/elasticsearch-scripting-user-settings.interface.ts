import { ElasticsearchScriptTypeSettings } from './elasticsearch-script-type-settings.interface'

export interface ElasticsearchScriptingUserSettings {
  expressions_enabled?: boolean
  file?: ElasticsearchScriptTypeSettings
  inline?: ElasticsearchScriptTypeSettings
  mustache_enabled?: boolean
  painless_enabled?: boolean
  stored?: ElasticsearchScriptTypeSettings
}
