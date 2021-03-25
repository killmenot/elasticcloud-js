import { KibanaSystemSettings } from './kibana-system-settings.interface'

export interface KibanaConfiguration {
  docker_image?: string
  system_settings?: KibanaSystemSettings
  user_settings_json?: Record<string, unknown>
  user_settings_override_json?: Record<string, unknown>
  user_settings_override_yaml?: string
  user_settings_yaml?: string
  version?: string
}
