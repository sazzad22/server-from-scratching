import { Schema, model } from 'mongoose';
import Order from '@/resources/order/order.interface';
import { array } from 'joi';

const OrderSchema = new Schema(
    {
        orderItems: [{ //this id is of orderItems Collection, we populate this field with whichever id is matched from order collection
            type: Schema.Types.ObjectId,
            ref:"OrderItem"
        }] ,
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
