import React, { useState } from "react";

function Stock({ stock, setPortfolio, portfolioStocks, stocks, setStocks, setDynStocks, dynamicStocks, onSellStock, onMoveToPortfolio  }) {

  const { ticker, name, type, price, id } = stock

  
  function handleExchange() {
    const search = dynamicStocks.find((stock) => stock.name == name)
    console.log(search)
    if (search) {
      setPortfolio([...portfolioStocks, stock])  
      onMoveToPortfolio(stock)
      // console.log(search)
    } else {
      // setDynStocks([...dynamicStocks, stock])
      // onSellStock(stock)
      console.log(name)
    }
  }

  return (
    <div>
      <div className="card" onClick={handleExchange}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
