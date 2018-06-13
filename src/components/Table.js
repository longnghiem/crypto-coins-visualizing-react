import React, {Component} from 'react';
import Table_row from './Table_row';
import Table_head from './Table_head';

const table = (props) => {
    return (
      <table id="data-table">
        <thead>
          <tr>
            <Table_head type='name' sort={props.sort} sort_order={props.sort_order} sorted_state={props.sorted_state}/>
            <Table_head type='price_usd' sort={props.sort} sort_order={props.sort_order} sorted_state={props.sorted_state}/>
            <Table_head type='rank' sort={props.sort} sort_order={props.sort_order} sorted_state={props.sorted_state}/>
            <Table_head type='percent_change_24h' sort={props.sort} sort_order={props.sort_order} sorted_state={props.sorted_state}/>
          </tr>
        </thead>
        <tbody id='table-body'>
          {props.coins.map(coin => {
            return (
              <Table_row coin={coin} key={coin.id}/>
            )
          } )}
        </tbody>
    </table>
    )
}

export default table;
