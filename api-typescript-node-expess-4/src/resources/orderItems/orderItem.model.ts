import { Schema, model } from 'mongoose';
import OrderItem from '@/resources/orderItems/orderItem.interface';
import { number } from 'joi';

const OrderItemSchema = new Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        product: {
            type: String,
            required: true

        }
    },
    {
        timestamps: true
    }
);

export default model<OrderItem>("OrderItem", OrderItemSchema);