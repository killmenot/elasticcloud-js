import { AppSearchSystemSettings } from './app-search-system-settings.interface'

export interface AppSearchConfiguration {
  docker_image?: string
  system_settings?: AppSearchSystemSettings
  user_settings_json?: Record<string, unknown>
  user_settings_override_json?: Record<string, unknown>
  user_settings_override_yaml?: string
  user_settings_yaml?: string
  version?: string
}
