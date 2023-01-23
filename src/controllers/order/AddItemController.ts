import { Request, Response } from 'express';
import { AddItemServices } from '../../services/order/AddItemServices';

class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;

        const addItemServices = new AddItemServices();

        const order = await addItemServices.execute({
            order_id,
            product_id,
            amount
        });

        return res.json(order);
    }
}

export { AddItemController } 
