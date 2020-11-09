import React, { useState, useEffect } from "react";
import DoughnutWrapper from './Doughnut';
import useFullPageLoader from './useFullPageLoader';
import "./styles.css";

const fromFetch = [
  { value: 5870, label: "Contatado", bg: "#3296ED", bd: "#3296ED" },
  { value: 2117, label: "Não contatado", bg: "#006699", bd: "#006699" },
  { value: 928, label: "???", bg: "orange", bd: "orange" }
]

export default function App() {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fromFetch)
    setLoading(false);
  }, [])

  function handleRefresh() {
    showLoader();
    setTimeout(() => {
      setData(data.map(i => Object.assign(i, { value: Math.floor(Math.random() * 1000) })))
      hideLoader();
    }, 1000);
  }

  return (
    <>
      <div className="App">
        {!loading && (
          <>
            <h2>Visão Geral Leads</h2>
            <div className="DoughnutContainer">
              <button onClick={handleRefresh}>Atualizar</button>
              <DoughnutWrapper data={data} />
            </div>
            <hr/>
            <h2>Visão por tipo de lead</h2>
          </>
        )}
      </div>
      {loader}
    </>
  );
}
