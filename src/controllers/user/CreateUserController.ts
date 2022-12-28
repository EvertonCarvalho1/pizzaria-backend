//o controller vai receber diretamento nossa requisição, ele vai chamar o service repassando os dados necessários

import { Request, Response } from 'express';

class CreateUserController {
    async handle(req: Request, res: Response) {

        const teste = req.body
        return res.json({ ok: teste })
    }
}

export { CreateUserController } 