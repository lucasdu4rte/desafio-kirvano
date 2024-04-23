import { Validation } from "@/validation/protocols/validation"
import { RequiredFieldValidator } from "@/validation/validators/required-field-validation"
import { ValidationComposite } from "@/validation/validators/validation-composite"

export class ProcessPaymentFieldsValidator implements Validation {
  validate(input: any) {
    const validations: Validation[] = []

    for (const field of ['cardNumber', 'cardExpiration', 'cardCvv']) {
      validations.push(new RequiredFieldValidator(field))
    }
    const validationComposite = new ValidationComposite(validations)
    return validationComposite.validate(input)
  }
}
