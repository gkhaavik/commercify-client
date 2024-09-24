
const apiUri = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export const getProducts = async () => {
    const response = await fetch(apiUri + '/api/v1/products')
        .then((res) => res.json())
        .catch((err) => console.error("api:", err));
    return response;
};

export const getUserOrders = async (userId: string) => {
    const response = await fetch(`${apiUri}/api/v1/orders/user/${userId}`)
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

export const makePayment = async (paymentData: { orderId: string; amount: number }) => {
    const response = await fetch(`${apiUri}/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
    });
    return response;
};
