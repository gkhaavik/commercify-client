import { Order } from "@/types";

const apiUri = process.env.NEXT_PUBLIC_ORDERS_API_URL;

export const getUserOrders = async (userId: string): Promise<Order[]> => {
    const response = await fetch(`${apiUri}/api/v1/orders/user/${userId}`)
        .then((res) => res.json())
        .catch((err) => console.error("api:", err));


    console.log("orders:", response);

    return response;
};

export const getAllOrders = async () => {
    const response = await fetch(`${apiUri}/api/v1/orders`)
        .then((res) => res.json())
        .catch((err) => console.error("api:", err));
    return response;
};

export const createOrder = async (orderData: { productId: string; quantity: number }) => {
    const response = await fetch(`${apiUri}/api/v1/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
    });
    return response;
};
