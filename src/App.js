import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import _ from 'lodash';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var bittrex = '0x3c5167c93dbaa26f945fba324dc0f7e07c9f18a8'
var accountBalance = web3.fromWei(web3.eth.getBalance(bittrex), 'ether');

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    console.log(bittrex)
    console.log(accountBalance.toString())
  }
  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first dApp</h2>
        </div>
        <div className="App-Content">
          <table>
            <thead>
              <tr>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Age </th>
              </tr>
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
