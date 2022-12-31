import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
// import validationMiddleware from '@/middleware/validation.middleware';
// import validate from '@/resources/order/order.validation';
import OrderService from '@/resources/order/order.service';
import Order from './order.interface';
import OrderModel from './order.model';

class OrderController implements Controller {
    public path = '/orders';
    public router = Router();
    private OrderService = new OrderService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        // create all orders
        this.router.post(
            `${this.path}`,
            this.create
        );
        //get all orders
        this.router.get(`${this.path}`,this.getAllOrder)
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { orderItems, phone } = req.body;

            const order = await this.OrderService.create(orderItems, phone);

            res.status(201).json({ order });
        } catch (error) {
            next(new HttpException(400, 'Cannot create Order'));
        }
    };

    //Get all order
    private async getAllOrder(
        req: Request,
        res: Response,
        next: NextFunction
    ):Promise<Response | void> {
        try {
            const orderService = new OrderService();
            const orders = await orderService.getAllOrderService()
            res.status(200).send(orders)
        } catch (error) {
            console.log(error);
            throw new Error("Unable to get all order (controller)");
            
        }
    }
}

export default OrderController;
