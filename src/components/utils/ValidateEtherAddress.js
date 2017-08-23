export default class ValidateEtherAddress{
  constructor(address, web3) {
    this.address = address
    this.web3    = web3
  }

  call() {
    return this._isAddress(this.address)
  }

  _isAddress = address => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      // check if it has the basic requirements of an address
      return false
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
      // If it's all small caps or all all-caps, return "true
      return true
    } else {
      return this._isChecksumAddress(address)
    }
  }

  _isChecksumAddress = address => {
    address = address.replace('0x','');
    var addressHash = this.web3.sha3(address.toLowerCase());
    for (var i = 0; i < 40; i++ ) {
      // the nth letter should be uppercase if the nth digit of casemap is 1
      if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
        return false;
      }
    }
    return true;
  }
}
