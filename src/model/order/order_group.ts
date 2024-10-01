import { OrderDiscount } from './order_discount';
import { OrderItem } from './order_item';
import { OrderTax } from './order_tax';

export type OrderGroup = {
    uuid: string;
    branch_uuid: string;
    created_by: string;
    orders: Map<string, OrderItem>;
    taxes: Map<string, OrderTax>;
    discounts: Map<string, OrderDiscount>;
    created_at: Date;
    deleted_at: Date;
    completed_at: Date;
};
