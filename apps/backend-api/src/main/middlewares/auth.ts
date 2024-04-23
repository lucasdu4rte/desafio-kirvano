import { AccessDeniedError } from '@/presentation/errors/access-denied-error'
import { forbidden } from '@/presentation/helpers/http/http-helpers'
import { type NextFunction, type Request, type Response } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.query.access_token
  if (!accessToken) return forbidden(new AccessDeniedError())

  next()
}
