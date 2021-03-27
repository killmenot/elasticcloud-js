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

import { ElasticsearchConfiguration } from './elasticsearch-configuration.interface'
import { ElasticsearchNodeType } from './elasticsearch-node-type.interface'
import { TopologyElementControl } from './topology-element-control.interface'
import { TopologySize } from './topology-size.interface'

export interface ElasticsearchClusterTopologyElement {
  autoscaling_max?: TopologySize
  autoscaling_min?: TopologySize[]
  autoscaling_policy_override_json?: Record<string, unknown>
  elasticsearch?: ElasticsearchConfiguration
  id?: string
  instance_configuration_id?: string
  node_roles?: string[]
  node_type?: ElasticsearchNodeType
  size?: TopologySize
  topology_element_control?: TopologyElementControl
  zone_count?: number //int32
}
