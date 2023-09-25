import React, { useState } from "react";

function Stock({ stock, handleExchange, }) {

  const { ticker, name, type, price, id } = stock

  function handleAssignments() {
    console.log(stock)
    handleExchange(stock);
  }


  return (
    <div>
      <div className="card" onClick={handleAssignments}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
