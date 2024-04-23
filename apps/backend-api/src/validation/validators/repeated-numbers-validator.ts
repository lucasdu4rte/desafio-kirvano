import { CardValidator } from "../protocols/card-validator";

export class RepeatedNumbersValidator implements CardValidator {
  validate(cardNumber: string): boolean {
    const numberWithoutSpaces = cardNumber.replace(/\s/g, '');
    const pattern = /^(\d)\1+$/;
    return !pattern.test(numberWithoutSpaces);
  }
}
