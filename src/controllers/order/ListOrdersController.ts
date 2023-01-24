import { Request, Response } from 'express';
import { ListOrdersServices } from '../../services/order/ListOrdersServices';

class ListOrdersController {
    async handle(req: Request, res: Response) {

        const listOrdersServices = new ListOrdersServices();

        const orders = await listOrdersServices.execute();

        return res.json(orders);
    }
}

export { ListOrdersController }