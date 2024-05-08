import React, { useState } from "react";
import axios from "axios";

const BuyTickets = () => {
  const [ticketOptions, setTicketOptions] = useState([
    { type: "adult", price: 30, quantity: 0 },
    { type: "child", price: 20, quantity: 0 },
    { type: "senior", price: 25, quantity: 0 },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTicketQuantityChange = (index, e) => {
    const updatedTicketOptions = [...ticketOptions];
    updatedTicketOptions[index].quantity = parseInt(e.target.value);
    setTicketOptions(updatedTicketOptions);
    calculateTotalPrice(updatedTicketOptions);
  };

  const calculateTotalPrice = (options) => {
    const total = options.reduce(
      (acc, option) => acc + option.price * option.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const tickets = ticketOptions.map(({ type, quantity }) => ({
        ticketType: type,
        quantity,
        totalPrice: quantity * ticketOptions.find(t => t.type === type).price
      }));

      
      const response = await axios.post("/api/buyTickets", { tickets });
      console.log("Purchase successful:", response.data);
    } catch (error) {
      console.error("Error purchasing tickets:", error);
    }
  };

  return (
    <div className="tickets">
      <h2>Buy Tickets</h2>
      <form onSubmit={handleSubmit}>
        {ticketOptions.map((option, index) => (
          <div key={index}>
            <label htmlFor={`ticketType-${option.type}`}>
              {option.type.charAt(0).toUpperCase() + option.type.slice(1)}:
            </label>
            <input
              type="number"
              id={`ticketType-${option.type}`}
              value={option.quantity}
              onChange={(e) => handleTicketQuantityChange(index, e)}
              min="0"
            />
          </div>
        ))}
        <div>
          <label>Total Price:</label>
          <span>${totalPrice}</span>
        </div>
        <button type="submit">Purchase Tickets</button>
      </form>
    </div>
  );
};

export default BuyTickets;
