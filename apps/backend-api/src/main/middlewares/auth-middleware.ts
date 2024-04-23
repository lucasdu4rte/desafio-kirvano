import { AccessDeniedError } from "@/presentation/errors/access-denied-error";
import { forbidden, ok, serverError } from "@/presentation/helpers/http/http-helpers";
import { HttpResponse } from "@/presentation/protocols/http";
import { Middleware } from "@/presentation/protocols/middleware";

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}

class LoadAccountByToken {
  async load(accessToken: string) {
    return { id: ''}
  }
}

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) { }

  async handle ({ accessToken }: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      if (!accessToken) return forbidden(new AccessDeniedError())

      const account = await this.loadAccountByToken.load(accessToken)
      if (!account) return forbidden(new AccessDeniedError())

      return ok({ accountId: account.id })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
