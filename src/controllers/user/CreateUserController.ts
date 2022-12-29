//o controller vai receber diretamento nossa requisição, ele vai chamar o service repassando os dados necessários

import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });

        return res.json(user);
    }
}

export { CreateUserController } 