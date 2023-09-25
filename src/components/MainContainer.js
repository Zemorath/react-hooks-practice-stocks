import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, setStocks, dynamicStocks, setDynStocks }) {

  const [portfolioStocks, setPortfolio] = useState([])

  function handleSell(movedStock) {
    const updatedstocks = portfolioStocks.filter((stock) => stock.id !== movedStock.id)
    setPortfolio(updatedstocks)
  }

  // function handleExchange(e) {
  //   const search = dynamicStocks.find((stock) => stock.name === e.name)
  //   // console.log(search)
  //   if (search) {
  //     setPortfolio([...portfolioStocks, stock])  
  //     onMoveToPortfolio(stock)
  //     console.log(id)
  //   } else {
  //     // setDynStocks([...dynamicStocks, stock])
  //     // onSellStock(stock)
  //     console.log(name)
  //   }
  // }

  // console.log(portfolioStocks)


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks} 
            setStocks={setStocks} 
            portfolioStocks={portfolioStocks} 
            setPortfolio={setPortfolio} 
            dynamicStocks={dynamicStocks} 
            setDynStocks={setDynStocks}
            onHandleSell={handleSell}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
