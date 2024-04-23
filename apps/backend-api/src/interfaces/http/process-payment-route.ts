import { PaymentController } from "../../application/controllers/payment-controller";
import { RouterAdapter } from "../adapters/router-adapter";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

import { CreditCardValidator } from "@/validation/validators/credit-card-validator";
import { ExpiryDateValidator } from "@/validation/validators/expiry-date-validator";
import { RepeatedNumbersValidator } from "@/validation/validators/repeated-numbers-validator";
import { PaymentRepositoryImpl } from "@/infra/repositories/payment-repository-implementation";
import { ProcessPaymentUseCase } from "@/application/useCases/process-payment.use-case";
import { ProcessPaymentFieldsValidator } from "@/validation/validators/process-payment-fields-validator";

export class MakeProcessPaymentRoute implements RouterAdapter {
  public async route(httpRequest: HttpRequest): Promise<HttpResponse> {
    const processPaymentFieldsValidator = new ProcessPaymentFieldsValidator()
    const paymentRepository = new PaymentRepositoryImpl();
    const repeatedNumbersValidator = new RepeatedNumbersValidator();
    const creditCardValidator = new CreditCardValidator();
    const expiryDateValidator = new ExpiryDateValidator();

    const processPaymentUseCase = new ProcessPaymentUseCase(
      processPaymentFieldsValidator,
      paymentRepository,
      repeatedNumbersValidator,
      creditCardValidator,
      expiryDateValidator,
    );
    const paymentController = new PaymentController(
      processPaymentUseCase
    )

    const response = await paymentController.processPayment(httpRequest);

    return response
  }
}
