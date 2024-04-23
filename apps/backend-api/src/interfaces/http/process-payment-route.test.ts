import { describe, expect, it } from 'vitest'
import { MakeProcessPaymentRoute } from './process-payment-route'
import { HttpRequest } from '../../presentation/protocols/http'
import { PaymentRejectedError } from '@/presentation/errors/payment-rejected-error'

describe('Process Payment Router', () => {
  it('Should return 400 if card number is "1234 1234 1234 1234"', async () => {
    const processPaymentRouter = new MakeProcessPaymentRoute()
    const httpRequest = {
      body: {
        cardNumber: '1234123412341234',
        cardExpiration: '2031-06-01',
        cardCvv: '999',
      }
    } as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(PaymentRejectedError)
  })

  it('Should return 400 and error "Pagamento recusado" if card number is equals number ex: "1111 1111 1111 1111"', async () => {
    const processPaymentRouter = new MakeProcessPaymentRoute()
    const httpRequest = {
      body: {
        cardNumber: '1111111111111111',
        cardExpiration: '2031-06-01',
        cardCvv: '999',
      }
    } as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(PaymentRejectedError)
  })

  it('Should return 400 and error "Pagamento recusado" if card number is equals number ex: "2222 2222 2222 2222"', async () => {
    const processPaymentRouter = new MakeProcessPaymentRoute()
    const httpRequest = {
      body: {
        cardNumber: '2222222222222222',
        cardExpiration: '2031-06-01',
        cardCvv: '999',
      }
    } as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(PaymentRejectedError)
  })

  it('Should return 400 "Pagamento recusado" if card expiration is expired', async () => {
    const processPaymentRouter = new MakeProcessPaymentRoute()
    const httpRequest = {
      body: {
        cardNumber: '5229676028742014',
        cardExpiration: '2020-06-01',
        cardCvv: '999',
      }
    } as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(400)
    expect(httpResponse.body).toBeInstanceOf(PaymentRejectedError)
  })

  it('Should return 200 if payment accept', async () => {
    const processPaymentRouter = new MakeProcessPaymentRoute()
    const httpRequest = {
      body: {
        cardNumber: '5229676028742014',
        cardExpiration: '2031-06-01',
        cardCvv: '513',
      }
    } as HttpRequest
    const httpResponse = await processPaymentRouter.route(httpRequest)

    expect(httpResponse.status).toBe(200)
  })
})
