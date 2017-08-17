import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props)

    var web3 = new Web3(new Web3.providers.HttpProvider());

    // TODO: This should be a form input
    // Bittrex Address
    this.address = '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98'
    this.accountBalance = web3.fromWei(web3.eth.getBalance(this.address), 'ether');
  }
  componentWillMount(){
    console.log(this.address)
    console.log(this.accountBalance.toString())
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>EtherSearch</h2>
        </div>
        <p> Search Bar Here? </p>
      </div>
    );
  }
}

export default App;
