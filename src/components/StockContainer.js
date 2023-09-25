import React from "react";
import Stock from "./Stock";
import { v4 as uuid } from "uuid";

function StockContainer({ dynamicStocks, handleExchange, selectedCategory, sorting }) {

  const stocksToDisplay = dynamicStocks.filter((stock) => {
    if (selectedCategory == '') {
      return true
    } else {
      return stock.type == selectedCategory
    }
  }).sort((a, b) => {
    if (sorting === '') {
      return true
    } else if (sorting === 'Alphabetically') {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0
    } else if (sorting === 'Price') {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0
    }
  })

  
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => (
        <Stock  
          stock={stock} 
          key={uuid()} 
          handleExchange={handleExchange}
          />
      ))}
    </div>
  );
}

export default StockContainer;
