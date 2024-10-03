import { OrderGroup } from '../order/order_group';

export type Transaction = {
    uuid: string;
    branch_uuid: string;
    order_group: OrderGroup;
    total: number;
    profit: number;
    customer: string;
    created_by: string;
    created_at: Date;
    deleted_at: Date;
};
