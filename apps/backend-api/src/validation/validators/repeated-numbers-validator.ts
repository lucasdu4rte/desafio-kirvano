import { CardValidator } from "../protocols/card-validator";

export class RepeatedNumbersValidator implements CardValidator {
  validate(cardNumber: string): boolean {
    const pattern = /^(\d)\1+$/;
    return !pattern.test(cardNumber);
  }
}
