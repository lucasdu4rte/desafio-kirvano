import { MissingParamError } from "@/presentation/errors/missing-param-error"
import { Validation } from "../protocols/validation"

export class RequiredFieldValidator implements Validation {
  constructor (private readonly fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error | null {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }

    return null
  }
}
