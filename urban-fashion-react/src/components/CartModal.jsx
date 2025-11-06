import React from 'react';

const CartModal = ({ cart, onClose, onUpdateQuantity, total, onCheckout }) => {
    return (
        <div className="cart-modal" style={{ display: 'flex' }} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="cart-content">
                <span className="close-cart" onClick={onClose}>&times;</span>
                <h2>Your Shopping Cart</h2>
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p className="empty-cart-message">Your cart is empty</p>
                    ) : (
                        cart.map(item => (
                            <div className="cart-item" key={item.name}>
                                <div className="cart-item-details">
                                    <h4 className="cart-item-title">{item.name}</h4>
                                    <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <button className="quantity-btn decrease" onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button className="quantity-btn increase" onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}>+</button>
                                </div>
                                <div className="cart-item-total">₹{(item.price * item.quantity).toLocaleString()}</div>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <>
                        <div className="cart-total">
                            Total: ₹<span id="total-amount">{total.toLocaleString()}</span>
                        </div>
                        <button className="checkout-btn" onClick={onCheckout}>Proceed to Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartModal;
