import { StatusCodes } from 'http-status-codes'

export interface ElasticResponse<T> {
  data?: T
  headers?: unknown
  status: StatusCodes
}
