import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import PaymentModal from './components/PaymentModal';

function App() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.name === product.name);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setIsCartOpen(true);
    };

    const updateQuantity = (name, quantity) => {
        setCart((prevCart) => {
            return prevCart
                .map((item) => (item.name === name ? { ...item, quantity } : item))
                .filter((item) => item.quantity > 0);
        });
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsPaymentOpen(true);
    };

    const handleConfirmPayment = () => {
        alert('Thank you for your order! Your payment has been processed successfully.');
        setCart([]);
        setIsPaymentOpen(false);
    };

    return (
        <>
            <Header
                onCartClick={() => setIsCartOpen(true)}
                onLoginClick={() => setIsLoginOpen(true)}
            />
            <main>
                <Hero />
                <CategoryNav />
                <Products onAddToCart={addToCart} />
                <About />
                <Contact />
                <Newsletter />
            </main>
            <Footer />

            {isCartOpen && (
                <CartModal
                    cart={cart}
                    onClose={() => setIsCartOpen(false)}
                    onUpdateQuantity={updateQuantity}
                    total={totalAmount}
                    onCheckout={handleCheckout}
                />
            )}

            {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}

            {isPaymentOpen && (
                <PaymentModal
                    total={totalAmount}
                    onClose={() => setIsPaymentOpen(false)}
                    onConfirm={handleConfirmPayment}
                />
            )}
        </>
    );
}

export default App;
