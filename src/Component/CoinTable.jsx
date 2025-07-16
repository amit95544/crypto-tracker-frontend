// CoinTable.jsx - Ye component coin data table me dikhata hai
import React, { useEffect, useState } from 'react';
import { fetchCoins } from '../services/api';
// import './CoinTable.css'; // optional

const CoinTable = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    loadData();
    const interval = setInterval(() => loadData(), 30 * 60 * 1000); // 30 min refresh
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const data = await fetchCoins();
    setCoins(data);
  };

  return (
    <div className="coin-table">
      <h2>Top 10 Cryptocurrencies</h2>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price (USD)</th>
            <th>Market Cap</th>
            <th>24h Change</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.coinId}>
              <td>{coin.name} ({coin.symbol.toUpperCase()})</td>
              <td>${coin.price.toLocaleString()}</td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td style={{ color: coin.change24h < 0 ? 'red' : 'green' }}>
                {coin.change24h?.toFixed(2)}%
              </td>
              <td>{new Date(coin.lastUpdated).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;