import OrderItemModel from '@/resources/orderItems/orderItem.model';
import OrderItem from '@/resources/orderItems/orderItem.interface';

class OrderService {
    private orderItemModel = OrderItemModel;

    // Create a New Order Item

    async createOrderItemService(quantity: number, product: string):Promise<OrderItem> {
        try {
            const orderItem = await this.orderItemModel.create({  quantity, product });
            return orderItem;
        } catch (error) {
            console.log(error);
            throw new Error("Unable to create an order Item")
        }
    }

    //get all order items
    public async getAllOrderItemService(): Promise<OrderItem[]>{
        try {
            return await this.orderItemModel.find();
        } catch (error) {
            throw new Error('Unable to get all orders Item');
        }
    }
}

export default OrderService;