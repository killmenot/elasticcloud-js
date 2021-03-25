import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ElasticCloudOptions } from './elastic-cloud-options'
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
  }

  public async createDeployment(data: DeploymentCreateRequest): Promise<AxiosResponse<DeploymentCreateResponse>> {
    return this.http.post('/deployments', { data })
  }

  public async deleteDeployment(deploymentId: string): Promise<AxiosResponse<DeploymentDeleteResponse>> {
    return this.http.delete(`/deployments/${deploymentId}`)
  }
  
  public async getDeploymentsList(): Promise<AxiosResponse<DeploymentsListResponse>> {
    return this.http.get('/deployments')
  }

  public async getDeployment(deploymentId: string): Promise<AxiosResponse<DeploymentGetResponse>> {
    return this.http.get(`/deployments/${deploymentId}`)
  }

  public async restoreDeployment(deploymentId: string): Promise<AxiosResponse<DeploymentRestoreResponse>> {
    return this.http.post(`/deployments/${deploymentId}/_restore`)
  }

  public async shutdownDeployment(deploymentId: string): Promise<AxiosResponse<DeploymentShutdownResponse>> {
    return this.http.post(`/deployments/${deploymentId}/_shutdown`)
  }
}
