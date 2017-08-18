import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

class App extends Component {
  constructor(props) {
    super(props)
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/ethersearch'));
    this.state = { accountBalance: '0' }
  }
  performSearch = (e) => {
    var address = e.target.value
    var accountBalance = this.web3.fromWei(this.web3.eth.getBalance(address), 'ether')
    this.setState({
      accountBalance: accountBalance.toString()
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EtherSearch</h2>
        </div>
        <form>
          <label>Eth Address: </label>
          <input type="text" name="name" onKeyUp={this.performSearch} />
        </form>
        <div className='accountBalance'>
          <p>{this.state.accountBalance}</p>
        </div>
      </div>
    );
  }
}

export default App;
