import React from 'react';

const table_row = ({coin}) => {
  return (
    <tr className="table-row">
      <td>{coin.name}</td>
      <td>{coin.price_usd}</td>
      <td>{coin.rank}</td>
      <td className={coin.percent_change_24h > 0 ? 'increase' : 'decrease'}>{coin.percent_change_24h}</td>
    </tr>
  )
}

export default table_row;
