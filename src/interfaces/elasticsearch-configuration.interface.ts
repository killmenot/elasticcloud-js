/**
 * @license
 * Copyright (c) 2021 Alexey Kucherenko, ROQ Technology
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
