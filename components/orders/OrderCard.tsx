import { Order } from '@/types'
import React from 'react'

type OrderCardProps = {
    order: Order
}

const OrderCard = ({ order }: OrderCardProps) => {
    return (
        <div>
            <h2>Order ID: {order.id}</h2>
            <p>Product ID: {order.productId}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Status: {order.status}</p>
            <p>Order Date: {order.orderDate}</p>
        </div>
    )
}

export default OrderCard