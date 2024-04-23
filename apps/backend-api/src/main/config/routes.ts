import { Router, type Express } from 'express'
import { processPaymentRouteInjector } from '../routes/process-payment-route'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  processPaymentRouteInjector(router)
}
