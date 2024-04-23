import { badRequest, ok } from '@/presentation/helpers/http/http-helpers';
import { HttpRequest, HttpResponse } from '../../presentation/protocols/http';
import { ProcessPaymentUseCase } from '../useCases/process-payment.use-case';
import { PaymentRejectedError } from '@/presentation/errors/payment-rejected-error';

export class PaymentController {
  constructor(
    private processPaymentUseCase: ProcessPaymentUseCase
  ) {}
  async processPayment(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await this.processPaymentUseCase.execute(httpRequest.body);

      return ok('Pagamento aceito')
    } catch (error) {

      return badRequest(new PaymentRejectedError())
    }
  }
};
