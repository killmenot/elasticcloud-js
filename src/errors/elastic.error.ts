import { CustomError } from 'ts-custom-error'
import { StatusCodes } from 'http-status-codes'

export class ElasticError extends CustomError {
  public constructor(public status: StatusCodes, public headers?: string[], public data?: unknown, message?: string) {
    super(message)
  }
}
