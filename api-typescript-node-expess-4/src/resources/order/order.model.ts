import { Schema, model } from 'mongoose';
import Order from '@/resources/order/order.interface';

const OrderSchema = new Schema(
    {
        orderItems: {
            type: Array,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export default model<Order>("Order", OrderSchema);
