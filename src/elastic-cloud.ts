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

import { URL } from 'url'
import axios, { AxiosInstance } from 'axios'
import urljoin from 'url-join'
import { ElasticCloudOptions } from './elastic-cloud-options.interface'
import { ElasticResponse } from './elastic-response.interface'
import { Enterprise, Response } from './decorators'
import { ElasticError } from './errors'
import {
  DeploymentCreateQueryParams,
  DeploymentCreateRequest,
  DeploymentCreateResponse,
  DeploymentDeleteResponse,
  DeploymentGetQueryParams,
  DeploymentGetResponse,
  DeploymentRestoreQueryParams,
  DeploymentRestoreResponse,
  DeploymentShutdownQueryParams,
  DeploymentShutdownResponse,
  DeploymentUpdateQueryParams,
  DeploymentUpdateRequest,
  DeploymentUpdateResponse,
  DeploymentsListQueryParams,
  DeploymentsListResponse,
} from './interfaces'
import { ElasticQueryParams } from './types'

const defaults = {
  baseURL: 'https://api.elastic-cloud.com/api/v1',
}

export class ElasticCloud {
  private http: AxiosInstance
  private options: ElasticCloudOptions

  constructor(options: ElasticCloudOptions) {
    this.options = {
      ...defaults,
      ...options,
    }
    this.http = axios.create({
      baseURL: this.options.baseURL,
      headers: { Authorization: `ApiKey ${this.options.apiKey}` },
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

  private getUrl(endpoint, query?: ElasticQueryParams): string {
    const url = new URL(this.options.baseURL)

    url.pathname = urljoin(url.pathname, endpoint)

    Object.keys(query || {}).forEach((x) => {
      url.searchParams.set(x, query[x])
    })

    console.log(url.toString())

    return url.toString()
  }

  @Response()
  public async createDeployment(
    data: DeploymentCreateRequest,
    query?: DeploymentCreateQueryParams
  ): Promise<ElasticResponse<DeploymentCreateResponse>> {
    return this.http.post('/deployments', data)
  }

  @Enterprise()
  @Response()
  public async deleteDeployment(deploymentId: string): Promise<ElasticResponse<DeploymentDeleteResponse>> {
    return this.http.delete(`/deployments/${deploymentId}`)
  }

  @Response()
  public async getDeploymentsList(
    query?: DeploymentsListQueryParams,
  ): Promise<ElasticResponse<DeploymentsListResponse>> {
    const url = this.getUrl('/deployments', query)

    return this.http.get(url)
  }

  @Response()
  public async getDeployment(
    deploymentId: string,
    query?: DeploymentGetQueryParams
  ): Promise<ElasticResponse<DeploymentGetResponse>> {
    const url = this.getUrl(`/deployments/${deploymentId}`, query)

    return this.http.get(url)
  }

  @Response()
  public async restoreDeployment(
    deploymentId: string,
    query?: DeploymentRestoreQueryParams
  ): Promise<ElasticResponse<DeploymentRestoreResponse>> {
    const url = this.getUrl(`/deployments/${deploymentId}/_restore`, query)

    return this.http.post(url)
  }

  @Response()
  public async shutdownDeployment(
    deploymentId: string,
    query?: DeploymentShutdownQueryParams
  ): Promise<ElasticResponse<DeploymentShutdownResponse>> {
    const url = this.getUrl(`/deployments/${deploymentId}/_shutdown`, query)

    return this.http.post(url)
  }

  @Response()
  public async updateDeployment(
    deploymentId: string,
    data: DeploymentUpdateRequest,
    query?: DeploymentUpdateQueryParams
  ): Promise<ElasticResponse<DeploymentUpdateResponse>> {
    const url = this.getUrl(`/deployments/${deploymentId}`, query)

    return this.http.put(url, data)
  }
}
