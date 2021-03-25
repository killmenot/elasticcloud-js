import { ApmSystemSettings } from './apm-system-settings.interface'

export interface ApmConfiguration {
  docker_image?: string
  system_settings?: ApmSystemSettings
  user_settings_json?: Record<string, unknown>
  user_settings_override_json?: string
  user_settings_override_yaml?: string
  user_settings_yaml?: string
  version?: string
}
