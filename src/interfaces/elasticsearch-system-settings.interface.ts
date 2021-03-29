/**
 * @license
 * Copyright (c) 2021 ROQ Technology
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
