import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/interfaces/controller.interface';
import OrderItemService from '@/resources/orderItems/orderItem.service';
// import validationMiddleware from '@/middleware/validation.middleware';
// import validate from '@/resources/orderItems/orderItem.validation';

class OrderItemController implements Controller {
    public path = '/orderitems';
    public router = Router();
    private OrderItemService = new OrderItemService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void{
        //create one orderItem
        this.router.post(`${this.path}`, this.createOrderItem);
        //get all orderItems
        this.router.get(`${this.path}`, this.getAllOrderItem);
    }

    //create one order Item
    private async createOrderItem(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        try {
            const { quantity, product } = req.body;
            const orderItemService = new OrderItemService();

            const orderItem = await orderItemService.createOrderItemService(quantity, product);
            res.status(201).send(orderItem);
            
        } catch (error) {
            console.log(error);
            throw new Error("Unable to get all order (controller)");
        }
    }
    //get all order items
    private async getAllOrderItem(
        req: Request,
        res: Response,
        next: NextFunction
    ):Promise<Response | void> {
        try {
            const orderItemService = new OrderItemService();
            const orderItems = await orderItemService.getAllOrderItemService();
            res.status(200).send(orderItems)
        } catch (error) {
            console.log(error);
            throw new Error("Unable to get all order (controller)");
        }
    }
}

export default OrderItemController;