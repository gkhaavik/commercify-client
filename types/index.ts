export type Order = {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    status: string; // new, processing, completed, cancelled
    orderDate: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
};