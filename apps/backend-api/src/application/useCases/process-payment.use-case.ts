
import { Payment } from '../../domain/entities/payment';
import { PaymentRepository } from '../../domain/repositories/payment-repository';
import { CreditCardValidator } from '@/validation/validators/credit-card-validator';
import { ExpiryDateValidator } from '@/validation/validators/expiry-date-validator';
import { ProcessPaymentFieldsValidator } from '@/validation/validators/process-payment-fields-validator';
import { RepeatedNumbersValidator } from '@/validation/validators/repeated-numbers-validator';

export class ProcessPaymentUseCase {
  constructor(
    private processPaymentFieldsValidator: ProcessPaymentFieldsValidator,
    private paymentRepository: PaymentRepository,
    private repeatedNumbersValidator: RepeatedNumbersValidator,
    private creditCardValidator: CreditCardValidator,
    private expiryDateValidator: ExpiryDateValidator,
  ) {}

  async execute(payment: Payment) {
    const validateFields = this.processPaymentFieldsValidator.validate(payment)
    if (validateFields !== null) {
      throw validateFields
    }
    if (!this.creditCardValidator.validate(payment.cardNumber)) {
      throw new Error('Cartão de crédito inválido');
    }

    if (!this.repeatedNumbersValidator.validate(payment.cardNumber)) {
      throw new Error('Cartão de crédito inválido');
    }

    if (!this.expiryDateValidator.validate(payment.cardExpiration)) {
      throw new Error('Data de validade do cartão expirada');
    }

    return this.paymentRepository.save(payment)
  }
}
