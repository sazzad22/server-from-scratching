import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/order/order.validation';
import OrderService from '@/resources/order/order.service';

class OrderController implements Controller {
    public path = '/posts';
    public router = Router();
    private OrderService = new OrderService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { title, body } = req.body;

            const post = await this.OrderService.create(title, body);

            res.status(201).json({ post });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };
}

export default OrderController;
