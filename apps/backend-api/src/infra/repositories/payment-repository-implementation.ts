import { Payment } from "@/domain/entities/payment";
import { PaymentRepository } from "@/domain/repositories/payment-repository";

export class PaymentRepositoryImpl implements PaymentRepository {
  async save(payment: Payment): Promise<Payment> {
    // Implemente a lógica para salvar um pagamento no banco de dados
    // Por exemplo, você pode usar um ORM como o TypeORM para isso
    // throw new Error("Method not implemented.");
    return payment
  }
}
