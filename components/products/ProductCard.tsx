import { useCart } from '@/app/context/CartContext';
import { Product } from '@/types'
import React from 'react'

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 text-base mb-4">{product.description}</p>
            <p className="text-gray-900 font-semibold mb-2">${product.price}</p>
            <p className="text-gray-600 mb-4">Stock: {product.stock}</p>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard