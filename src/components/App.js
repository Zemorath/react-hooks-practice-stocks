import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stocks, setStocks] = useState([])
  const [dynamicStocks, setDynStocks] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then((r) => r.json())
      .then((stocks) => {
        setStocks(stocks)
        setDynStocks(stocks)
      })
  }, [])



  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} setStocks={setStocks} dynamicStocks={dynamicStocks} setDynStocks={setDynStocks}/>
    </div>
  );
}

export default App;
