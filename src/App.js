import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Search_bar from './components/Search_bar';
import Total_coins from './components/Total_coins';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      sorted_state: 'rank',
      sort_order: 'asc'
    };
    this.allcoins = []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=2000')
    .then(response => response.json())
    .then(parsedJSON => {
      this.setState({coins:parsedJSON});
      this.allcoins = parsedJSON;
    })
    .catch(error => console.log('parsing failed', error))
  }

  onInputChange = (e) => {
    this.setState({
      coins: this.allcoins.filter(coin => {
        return coin.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      })
    })
  }

  sortHandle = (type) => {
    if (this.state.sorted_state !== type){
      if (type === 'name') {
        this.state.coins.sort((a,b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          } else {
            return 1;
          }
        })
      } else {
        this.setState({
          coins: this.state.coins.sort((a,b) => {
            return a[type] - b[type];
          })
        })
      }
      this.setState({
        sort_order: "asc"
      })

    } else {
      let sort_order = this.state.sort_order == "asc" ? "des" : "asc"
      this.setState({
        coins: this.state.coins.reverse(),
        sort_order: sort_order
      })
    }
    this.setState({sorted_state: type})
  }

  render() {
    console.log("render");
    return (
      <div className="App">
           <Search_bar changed={this.onInputChange}/>
           <Total_coins coin_num = {this.state.coins.length}/>
           <Table coins={this.state.coins} sort={this.sortHandle} sorted_state={this.state.sorted_state} sort_order={this.state.sort_order}/>
        </div>
    );
  }
}

export default App;
