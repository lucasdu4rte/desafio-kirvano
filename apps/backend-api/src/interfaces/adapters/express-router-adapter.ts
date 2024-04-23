import { Request, Response } from "express"
import { RouterAdapter } from "./router-adapter"

export class EspressRouterAdapter {
  static adapt(router: RouterAdapter) {
    return async (req: Request, res: Response) => {
      const httpRequest = {
        body: req.body
      }
      const httpResponse = await router.route(httpRequest)
      res.status(httpResponse.status).json(httpResponse.body)
    }
  }
}
