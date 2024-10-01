import { OrderDiscount } from './order_discount';
import { OrderItem } from './order_item';

export type Order = {
    uuid: string;
    item: OrderItem;
    discount: OrderDiscount;
    quantity: number;
    refundedQuantity: number;
    note: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};
