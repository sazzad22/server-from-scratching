import { Document } from "mongoose";
import OrderItem from '@/resources/orderItems/orderItem.interface';

interface Order extends Document{
    orderItems: Array<OrderItem>;
    phone: string;
}

export default Order;