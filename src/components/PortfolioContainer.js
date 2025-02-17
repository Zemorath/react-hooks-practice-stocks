import React, { useState } from "react";
import Stock from "./Stock";
import { v4 as uuid } from "uuid";

function PortfolioContainer({ portfolioStocks, handleExchange }) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks.map((stock) => (
          <Stock stock={stock} key={uuid()} handleExchange={handleExchange}/>
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
