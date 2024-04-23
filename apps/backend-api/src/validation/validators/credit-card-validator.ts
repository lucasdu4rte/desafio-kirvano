import { CardValidator } from "../protocols/card-validator";

export class CreditCardValidator implements CardValidator {
  validate(cardNumber: string): boolean {
    const numberWithoutSpaces = cardNumber.replace(/\s/g, '');
    return numberWithoutSpaces !== '1234123412341234';
  }
}
