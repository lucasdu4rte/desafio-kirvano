export interface PaymentProps {
  cardNumber: string;
  cardExpiration: string;
  cardCvv: string;
}

export class Payment {
  constructor(public props: PaymentProps) {}

  get cardNumber() {
    return this.props.cardNumber
  }
  get cardExpiration() {
    return this.props.cardExpiration
  }
  get cardCvv() {
    return this.props.cardCvv
  }
}
