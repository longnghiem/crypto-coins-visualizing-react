import React, {Component} from 'react';

class TableRow extends Component {
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.coin.id === nextProps.coin.id) return false;
    return true;
  }

  render(){
    return (
      <tr className="table-row">
        <td>{this.props.coin.name}</td>
        <td>{this.props.coin.price_usd}</td>
        <td>{this.props.coin.rank}</td>
        <td className={this.props.coin.percent_change_24h > 0 ? 'increase' : 'decrease'}>{this.props.coin.percent_change_24h}</td>
      </tr>
    )
  }

}

export default TableRow;
