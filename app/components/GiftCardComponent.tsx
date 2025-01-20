
"use client"

import React, { useState } from 'react';


const GiftCardComponent = () => {
  // State to track gift cards
  const [balance, setBalance] = useState(0); // Tracks the balance of the gift card
  const [amountToAdd, setAmountToAdd] = useState(''); // For adding balance (string for controlled input)
  const [redeemAmount, setRedeemAmount] = useState(''); // For redeeming balance (string for controlled input)

  // Handle adding balance to the gift card
  const addBalance = () => {
    const amount = parseFloat(amountToAdd);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive number');
      return;
    }
    setBalance(balance + amount);
    setAmountToAdd(''); // Clear the input field after adding
  };

  // Handle redeeming balance from the gift card
  const redeemBalance = () => {
    const amount = parseFloat(redeemAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive number');
      return;
    }
    if (amount > balance) {
      alert('Insufficient balance');
    } else {
      setBalance(balance - amount);
      setRedeemAmount(''); // Clear the input field after redeeming
    }
  };

  return (
    <div className="gift-card-container">
      <h2>Gift Card and Voucher</h2>

      {/* Display balance */}
      <div className="balance-display">
        <p>Current Balance: ${balance.toFixed(2)}</p>
      </div>

      {/* Add funds to the gift card */}
      <div className="add-funds">
        <input
          type="number"
          value={amountToAdd}
          onChange={(e) => setAmountToAdd(e.target.value)}
          placeholder="Amount to Add"
        />
        <button onClick={addBalance}>Add Balance</button>
      </div>

      {/* Redeem funds from the gift card */}
      <div className="redeem-funds">
        <input
          type="number"
          value={redeemAmount}
          onChange={(e) => setRedeemAmount(e.target.value)}
          placeholder="Amount to Redeem"
        />
        <button onClick={redeemBalance}>Redeem</button>
      </div>

      {/* Optional: Track usage of the card */}
      <div className="usage-history">
        <h3>Usage History:</h3>
        <p>Balance can be tracked in the app as it is adjusted after each redeem/add action.</p>
      </div>
    </div>
  );
};

export default GiftCardComponent;
