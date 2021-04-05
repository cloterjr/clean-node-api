import { NextFunction, Request, Response } from 'express'

import { Middleware, HttpRequest } from '../../presentation/protocols'

// Este middleware está agindo como um PROXY, você acessa um objeto que tem o mesmo tipo do objeto que você deseja acessar, e ele faz um filtro, nesse caso se
// o usuário tiver permissão a requisição é encaminhada para o objeto principal

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      headers: req.headers
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse && httpResponse?.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else if (httpResponse) {
      res.status(httpResponse?.statusCode).json({
        error: httpResponse?.body.message
      })
    }
  }
}
