import OrderModel from '@/resources/order/order.model';
import Order from '@/resources/order/order.interface';
import OrderItem from '@/resources/orderItems/orderItem.interface';

class OrderService {
    private order = OrderModel;

    // Create a New Order

    async create(orderItems: Array<OrderItem>, phone: string):Promise<Order> {
        try {
            const order = await this.order.create({ orderItems, phone });
            return order
        } catch (error) {
            throw new Error("Unable to create an order")
        }
    }

    public async getAllOrderService(): Promise<Order[]>{
        try {
            /* const orders: Order[] = await this.order.find({});
            console.log("Orders Service"); */
            return await this.order.find().populate("orderItems");
        } catch (error) {
            throw new Error('Unable to get all orders');
        }
    }
}

export default OrderService;