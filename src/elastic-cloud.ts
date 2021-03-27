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

import axios, { AxiosInstance } from 'axios'
import { ElasticCloudOptions } from './elastic-cloud-options.interface'
import { ElasticResponse } from './elastic-response.interface'
import { Response } from './decorators'
import { ElasticError } from './errors'
import {
  DeploymentCreateRequest,
  DeploymentsListResponse,
  DeploymentCreateResponse,
  DeploymentDeleteResponse,
  DeploymentGetResponse,
  DeploymentRestoreResponse,
  DeploymentShutdownResponse,
} from './interfaces'

export class ElasticCloud {
  private http: AxiosInstance

  constructor(options: ElasticCloudOptions) {
    this.http = axios.create({
      baseURL: 'https://api.elastic-cloud.com/api/v1',
      headers: { Authorization: `ApiKey ${options.apiKey}` },
    })

    this.http.interceptors.response.use(
      (response) => response,
      (err) => {
        return Promise.reject(
          new ElasticError(err.response.status, err.response.headers, err.response.data, err.message),
        )
      },
    )
  }

  @Response()
  public async createDeployment(data: DeploymentCreateRequest): Promise<ElasticResponse<DeploymentCreateResponse>> {
    return this.http.post('/deployments', data)
  }

  @Response()
  public async deleteDeployment(deploymentId: string): Promise<ElasticResponse<DeploymentDeleteResponse>> {
    return this.http.delete(`/deployments/${deploymentId}`)
  }

  @Response()
  public async getDeploymentsList(): Promise<ElasticResponse<DeploymentsListResponse>> {
    return this.http.get('/deployments')
  }

  @Response()
  public async getDeployment(deploymentId: string): Promise<ElasticResponse<DeploymentGetResponse>> {
    return this.http.get(`/deployments/${deploymentId}`)
  }

  @Response()
  public async restoreDeployment(deploymentId: string): Promise<ElasticResponse<DeploymentRestoreResponse>> {
    return this.http.post(`/deployments/${deploymentId}/_restore`)
  }

  @Response()
  public async shutdownDeployment(deploymentId: string): Promise<ElasticResponse<DeploymentShutdownResponse>> {
    return this.http.post(`/deployments/${deploymentId}/_shutdown`)
  }
}
