import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import _ from 'lodash';

// var ETHEREUM_CLIENT = new Web3()

//TODO: peopleContractABI and peopleContractAddress should be input values\

//People.deployed().then(a=>JSON.stringify(a.abi))
// var peopleContractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"}]

//People.deployed().then(a=>a.address)
// var bittrex = '0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98'
// var bittrexAccounts = ETHEREUM_CLIENT.fromWei(ETHEREUM_CLIENT.eth.getBalance(bittrex));

class App extends Component {
  constructor(props) {
    console.warning("TEST?!")

    super(props)
  }
  componentWillMount(){
    // console.log(bittrexAccounts)
  }
  render() {
    console.log("WTF")
    // console.log(bittrex)
    // console.log(bittrexAccounts)

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
