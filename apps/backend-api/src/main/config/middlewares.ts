import { type Express } from 'express'
import { cors } from '../middlewares/cors'
import { bodyParser } from '../middlewares/body-parser'
import { contentType } from '../middlewares/content-type'
import { auth } from '../middlewares/auth'

export const setupMiddlewares = (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
  app.use(contentType)
  app.use(auth)
}
