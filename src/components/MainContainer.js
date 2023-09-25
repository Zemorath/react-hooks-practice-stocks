import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ dynamicStocks, setDynStocks }) {

  const [portfolioStocks, setPortfolio] = useState([])
  const [selectedCategory, toggleCategory] = useState('')
  const [sorting, setSorting] = useState('')


  function handleMoveToPortfolio(movedStock) {
    const updatedStocks = dynamicStocks.filter((stock) => stock.id !== movedStock.id)
    setDynStocks(updatedStocks)
  }

  function handleMoveToStocks(movedStock) {
    const updatedStocks = portfolioStocks.filter((stock) => stock.id !== movedStock.id)
    setPortfolio(updatedStocks)
  }

  function handleSorting(e) {
    setSorting(e.target.value)
  }
  
  function handleExchange(e) {
    const search = dynamicStocks.some((stock) => stock.name == e.name)
    if (search) {
      setPortfolio([...portfolioStocks, e])  
      handleMoveToPortfolio(e)
    } else {
      setDynStocks([...dynamicStocks, e])
      handleMoveToStocks(e)
    }
  }

  return (
    <div>
      <SearchBar toggleCategory={toggleCategory} handleSorting={handleSorting} sorting={sorting}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            dynamicStocks={dynamicStocks} 
            handleExchange={handleExchange}
            selectedCategory={selectedCategory}
            sorting={sorting}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} setPortfolio={setPortfolio} handleExchange={handleExchange}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
