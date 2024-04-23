import { CardValidator } from "../protocols/card-validator";

export class ExpiryDateValidator implements CardValidator {
  validate(cardExpiration: string): boolean {
    const currentDate = new Date();
    const expirationDate = new Date(cardExpiration);
    return expirationDate > currentDate;
  }
}
