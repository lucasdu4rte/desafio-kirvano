import { describe, expect, it, test } from 'vitest'
import { ProcessPaymentRoute } from '../../interfaces/http/ProcessPaymentRoute'
import { HttpRequest } from '../protocols/http'

describe('Process Payment Router', () => {
  it('Should return 400 if card number is "1234 1234 1234 1234"', async () => {
    const processPaymentRouter = new ProcessPaymentRoute()
    const httpRequest = {} as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.error).toBe('Pagamento recusado')
  })

  it('Should return 400 and error "Pagamento recusado" if card number is equals number ex: "1111 1111 1111 1111"', async () => {
    const processPaymentRouter = new ProcessPaymentRoute()
    const httpRequest = {} as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)
    
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.error).toBe('Pagamento recusado')
  })


  it('Should return 400 and error "Pagamento recusado" if card number is equals number ex: "2222 2222 2222 2222"', async () => {
    const processPaymentRouter = new ProcessPaymentRoute()
    const httpRequest = {} as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)
    
    expect(httpResponse.status).toBe(400)
    expect(httpResponse.error).toBe('Pagamento recusado')
  })
})