export class PaymentRejectedError extends Error {
  constructor () {
    super('Pagamento recusado')
    this.name = 'PaymentRejectedError'
  }
}
