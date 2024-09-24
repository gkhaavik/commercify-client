"use client";

import { useEffect, useState } from 'react';
import { getUserOrders } from '../../utils/api';
import OrderCard from '@/components/orders/OrderCard';
import { Order } from '@/types';

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const userId = '1';

    useEffect(() => {
        getUserOrders(userId)
            .then((data) => setOrders(data))
            .catch((error) => console.error(error));
    }, [userId]);

    console.log(orders);

    if (!orders) return <div>Loading...</div>

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <p>Manage orders</p>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <OrderCard order={order} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
