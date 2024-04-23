import { Payment } from "@/domain/entities/payment";
import { PaymentGateway } from "@/domain/gateways/payment.gateway";
import { AxiosInstance } from "axios";

export class PaymentHttpGateway implements PaymentGateway {
  constructor(private readonly http: AxiosInstance) {}

  async save(payment: Payment) {
    await this.http.post(
      "/process-payment?access_token=hello_world",
      payment.props
    )
  }
}
