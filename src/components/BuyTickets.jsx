import React, { useState } from "react";

const BuyTickets = () => {
  const [ticketType, setTicketType] = useState("adult");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const ticketPrices = {
    adult: 30,
    child: 20,
    senior: 25
  };

  const handleTicketTypeChange = (e) => {
    setTicketType(e.target.value);
    calculateTotalPrice(e.target.value, ticketQuantity);
  };

  const handleTicketQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
    calculateTotalPrice(ticketType, e.target.value);
  };

  const calculateTotalPrice = (type, quantity) => {
    const price = ticketPrices[type] * quantity;
    setTotalPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Purchased ${ticketQuantity} ${ticketType} ticket(s) for a total of $${totalPrice}`);
  };

  return (
    <div>
      <h2>Buy Tickets</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticketType">Ticket Type:</label>
          <select id="ticketType" value={ticketType} onChange={handleTicketTypeChange}>
            <option value="adult">Adult</option>
            <option value="child">Child</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div>
          <label htmlFor="ticketQuantity">Quantity:</label>
          <input type="number" id="ticketQuantity" value={ticketQuantity} onChange={handleTicketQuantityChange} min="1" />
        </div>
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
