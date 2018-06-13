import React from 'react';

const total_coins = (props) => {
  return (
    <div className="total-coin">
      <h3>Number of coins</h3>
      <div id="number-of-coins">{props.coin_num}</div>
    </div>
  )
}

export default total_coins;
