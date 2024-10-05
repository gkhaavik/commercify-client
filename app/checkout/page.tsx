"use client";
import { useCart } from '@/app/context/CartContext';

export default function CheckoutPage() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="mb-4">
                            <div className="flex justify-between">
                                <div>
                                    <p>{item.name} (x{item.quantity})</p>
                                    <p>${item.unitPrice * item.quantity}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-4">
                <h2>Total: ${total.toFixed(2)}</h2>
                <button className="bg-green-500 text-white py-2 px-4 rounded mt-2">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
