import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import _ from 'lodash';


class App extends Component {
  constructor(props) {
    super(props)

    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    this.address = '0x3c5167c93dbaa26f945fba324dc0f7e07c9f18a8'
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
        <div className="App-Content">
          <table>
            <thead>
            </thead>
            <tbody>
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
