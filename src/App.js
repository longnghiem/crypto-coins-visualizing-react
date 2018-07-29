import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import TotalCoins from './components/TotalCoins';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      sorted_state: 'rank',
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

  // SEARCH FUNCTION
  onInputChange = (e) => {
    this.setState({
      coins: this.allcoins.filter(coin => {
        return coin.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      })
    })
  }

  // SORT FUNCTION
  sortHandler = (type, isSortedDesc) => {
    const coinCopy = [...this.state.coins]; //make a copy not pointing to the same place
    console.log('isSortedDesc', isSortedDesc);
    if (this.state.sorted_state !== type && !isSortedDesc){
      if (type === 'name') {
        this.setState({
          coins : coinCopy.sort((a,b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            return nameA < nameB ? -1 : 1
          })
        })
      } else {
        this.setState({
          coins: coinCopy.sort((a,b) => {
            return a[type] - b[type];
          })
        })
      }

    } else {
      this.setState({
        coins: coinCopy.reverse(),
      })
    }
    this.setState({sorted_state: type})
  }

  render() {
    return (
      <div className="App">
           <SearchBar changed={this.onInputChange}/>
           <TotalCoins coin_num = {this.state.coins.length}/>
           <Table coins={this.state.coins}
                  sort={this.sortHandler}
                  sorted_state={this.state.sorted_state}/>
        </div>
    );
  }
}

export default App;
