import React from 'react';

const totalCoins = (props) => {
  return (
    <div className="total-coin">
      <h3>Number of coins</h3>
      <div id="number-of-coins">{props.coin_num}</div>
    </div>
  )
}

export default totalCoins;
