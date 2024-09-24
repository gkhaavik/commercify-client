"use client";

import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/api';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';


export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res))
            .catch((err) => console.error("page:", err));
    }, []);

    if (!products) return <div>Loading...</div>

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <p>Browse our product selection.</p>
            <ul>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}
