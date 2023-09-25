import React from "react";
import Stock from "./Stock";
import { v4 as uuid } from "uuid";

function StockContainer({ stocks, setStocks, setPortfolio, portfolioStocks, handleMoveToPortfolio, dynamicStocks, setDynStocks, onHandleSell }) {

  function handleMoveToPortfolio(movedStock) {
    const updatedStocks = dynamicStocks.filter((stock) => stock.id !== movedStock.id)
    setDynStocks(updatedStocks)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {dynamicStocks.map((stock) => (
        <Stock 
          stocks={stocks} 
          setStocks={setStocks} 
          stock={stock} 
          key={uuid()} 
          setPortfolio={setPortfolio} 
          onMoveToPortfolio={handleMoveToPortfolio} 
          portfolioStocks={portfolioStocks}
          dynamicStocks={dynamicStocks}
          setDynStocks={setDynStocks}
          onSellStock={onHandleSell}/>
      ))}
    </div>
  );
}

export default StockContainer;
