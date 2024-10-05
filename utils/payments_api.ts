const apiUri = process.env.NEXT_PUBLIC_PAYMENTS_API_URL;

export const makePayment = async (paymentData: { orderId: string; amount: number }) => {
    const response = await fetch(`${apiUri}/api/v1/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
    });
    return response;
};
