import { Document } from "mongoose";

interface OrderItem extends Document {
    quantity: number;
    product: string;
}

export default OrderItem;