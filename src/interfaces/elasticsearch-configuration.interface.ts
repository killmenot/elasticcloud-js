import { ElasticsearchCuration } from './elasticsearch-curation.interface'
import { ElasticsearchSystemSettings } from './elasticsearch-system-settings.interface'
import { ElasticsearchUserBundle } from './elasticsearch-user-bundle.interface'
import { ElasticsearchUserPlugin } from './elasticsearch-user-plugin.interface'

export interface ElasticsearchConfiguration {
  curation?: ElasticsearchCuration
  docker_image?: string
  enabled_built_in_plugins?: string[]
  node_attributes?: Record<string, string>
  system_settings?: ElasticsearchSystemSettings
  user_bundles?: ElasticsearchUserBundle[]
  user_plugins?: ElasticsearchUserPlugin[]
  user_settings_json?: Record<string, unknown>
  user_settings_override_json?: Record<string, unknown>
  user_settings_override_yaml?: string
  user_settings_yaml?: string
  version: string
}
