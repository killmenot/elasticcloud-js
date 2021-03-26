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
