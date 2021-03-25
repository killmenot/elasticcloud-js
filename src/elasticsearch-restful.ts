import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { DeploymentCreateRequest, DeploymentCreateRequestQuery } from './interfaces'
import { ElasticsearchRestfulOptions } from './elasticsearch-restful-options'

export class ElasticsearchRestful {
  private http: AxiosInstance

  constructor(options: ElasticsearchRestfulOptions) {
    this.http = axios.create({
      baseURL: 'https://api.elastic-cloud.com/api/v1',
      timeout: 1000,
      headers: { Authorization: `ApiKey ${options.apiKey}` },
    })
  }

  async createDeployment<T>(
    data: DeploymentCreateRequest,
    params?: DeploymentCreateRequestQuery,
  ): Promise<AxiosResponse<T>> {
    return this.http.post('/deployments', { data, params })
  }

  async getDeploymentsList<T>(): Promise<AxiosResponse<T>> {
    return this.http.get('/deployments')
  }
}
