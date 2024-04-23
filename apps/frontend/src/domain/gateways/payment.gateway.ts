import { Payment } from "../entities/payment";

export interface PaymentGateway {
  save(payment: Payment): Promise<void>;
}
