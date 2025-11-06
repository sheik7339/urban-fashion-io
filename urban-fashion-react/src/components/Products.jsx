import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => (
    <div className="product-card">
        <div className="product-img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">₹{parseFloat(product.price).toLocaleString()}</p>
            <a href="#" className="btn add-to-cart" onClick={(e) => { e.preventDefault(); onAddToCart(product); }}>Add to Cart</a>
        </div>
    </div>
);

const Products = ({ onAddToCart }) => {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [kidsProducts, setKidsProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the Django API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/categories/');
                const data = await response.json();
                setMenProducts(data.find(cat => cat.name === 'Men')?.products || []);
                setWomenProducts(data.find(cat => cat.name === 'Women')?.products || []);
                setKidsProducts(data.find(cat => cat.name === 'Kids')?.products || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                // You might want to set some error state here
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <section id="men" className="products-section">
                <div className="container">
                    <h2 className="section-title">Men's Collection</h2>
                    <div className="products-grid">
                        {menProducts.map(product => <ProductCard key={product.name} product={product} onAddToCart={onAddToCart} />)}
                    </div>
                </div>
            </section>

            <section id="women" className="products-section" style={{ backgroundColor: 'var(--light-gray)' }}>
                <div className="container">
                    <h2 className="section-title">Women's Collection</h2>
                    <div className="products-grid">
                        {womenProducts.map(product => <ProductCard key={product.name} product={product} onAddToCart={onAddToCart} />)}
                    </div>
                </div>
            </section>

            <section id="kids" className="products-section">
                <div className="container">
                    <h2 className="section-title">Kids' Collection</h2>
                    <div className="products-grid">
                        {kidsProducts.map(product => <ProductCard key={product.name} product={product} onAddToCart={onAddToCart} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;