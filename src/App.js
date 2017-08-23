import React, { Component } from 'react';
import Web3 from 'web3';
import ValidateEtherAddress from '../src/components/utils/ValidateEtherAddress'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.web3  = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/ethersearch'));
    this.state = { accountBalance: '0' }
  }

  performSearch = (e) => {
    var address   = e.target.value
    var validator = new ValidateEtherAddress(address, this.web3)

    if (validator.call()) {
      console.log("VALIDATED")
      var accountBalance = this.web3.fromWei(this.web3.eth.getBalance(address), 'ether')
      this.setState({
        accountBalance: accountBalance.toString()
      })
    } else {
      console.log("NOT VALID")
      this.setState({
        accountBalance: "Invalid Account"
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='row'>
          <div className='nav-container'>
            <span className='brand'>CryptoMeta</span>
          </div>
        </div>

        <div>
          <form>
            <label>Eth Address: </label>
            <input type="text" name="name" onBlur={this.performSearch} />
          </form>
          <div className='accountBalance'>
            <p>{this.state.accountBalance}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
