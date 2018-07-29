import React, {Component} from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';

class Table extends Component {
  constructor(props){
    super(props);
  }


  render() {
  const  listOfHeading = ['name','price_usd','rank','percent_change_24h'].map((item,i)=> { {/*any header that is not sorted will receive disabled = true */}
    return <TableHead key={i} type={item} sort={this.props.sort} disabled={item !== this.props.sorted_state} />})
  const  listOfRow = this.props.coins.map(coin => {
      return (<TableRow coin={coin} key={coin.id}/>)})
    return (
        <table id="data-table">
          <thead>
            <tr>
              {listOfHeading}
            </tr>
          </thead>
          <tbody id='table-body'>
            {listOfRow}
          </tbody>
      </table>
      )
  }
}

export default Table;
