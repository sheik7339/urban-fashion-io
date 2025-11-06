import React, { useState } from 'react';

const PaymentModal = ({ total, onClose, onConfirm }) => {
    const [paymentMethod, setPaymentMethod] = useState('qr');

    return (
        <div className="payment-modal" style={{ display: 'flex' }} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="payment-content">
                <span className="close-payment" onClick={onClose}>&times;</span>
                <h2>Select Payment Method</h2>

                <div className="payment-options">
                    <div className={`payment-option ${paymentMethod === 'qr' ? 'active' : ''}`} onClick={() => setPaymentMethod('qr')}>
                        <input type="radio" name="payment" id="qr-payment" checked={paymentMethod === 'qr'} readOnly />
                        <label htmlFor="qr-payment">QR Code Payment</label>
                    </div>
                    <div className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`} onClick={() => setPaymentMethod('cod')}>
                        <input type="radio" name="payment" id="cod-payment" checked={paymentMethod === 'cod'} readOnly />
                        <label htmlFor="cod-payment">Cash on Delivery</label>
                    </div>
                    <div className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
                        <input type="radio" name="payment" id="card-payment" checked={paymentMethod === 'card'} readOnly />
                        <label htmlFor="card-payment">Credit/Debit Card</label>
                    </div>
                </div>

                {paymentMethod === 'qr' && (
                    <div className="qr-code" style={{ display: 'block' }}>
                        <h3>Scan to Pay</h3>
                        <div style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                            <p>QR Code Placeholder</p>
                        </div>
                        <p>Amount: ₹<span id="payment-amount">{total.toLocaleString()}</span></p>
                    </div>
                )}

                <button className="checkout-btn" onClick={onConfirm}>Confirm Payment</button>
            </div>
        </div>
    );
};

export default PaymentModal;
