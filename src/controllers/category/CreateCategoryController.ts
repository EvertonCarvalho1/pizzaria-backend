import { Request, Response } from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const createCategoryService = new CreateCategoryService();

        //Quando o usuário utiliza o metodo POST para realizer o cadatro, ele manda os dados dele através do corpo da requisição, que é o BODY
        const { name } = req.body


        const category = await createCategoryService.execute({
            name: name,
        });

        return res.json(category);
    }
}

export { CreateCategoryController }