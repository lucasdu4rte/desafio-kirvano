import { ServerError } from '@/presentation/errors/server-error'
import { UnauthorizedError } from '@/presentation/errors/unauthorized-error'
import { HttpResponse } from '@/presentation/protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  status: 401,
  body: new UnauthorizedError()
})

export const forbidden = (error: Error): HttpResponse => ({
  status: 403,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(String(error.stack))
})

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  status: 204,
  body: null
})
