import React from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

const table = (props) => {
    return (
      <table id="data-table">
        <thead>
          <tr>
            {['name','price_usd','rank','percent_change_24h'].map((item,i)=> { {/*any header that is not sorted will receive disabled = true */}
                return <TableHead key={i} type={item} sort={() => props.sort(item)} disabled={item !== props.sorted_state} />
            })
            }
          </tr>
        </thead>
        <tbody id='table-body'>
          {props.coins.map(coin => {
            return (
              <TableRow coin={coin} key={coin.id}/>
            )
          } )}
        </tbody>
    </table>
    )
}

export default table;
