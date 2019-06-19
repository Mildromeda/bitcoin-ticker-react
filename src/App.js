import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.BASE_URL = 'https://cors.io/?https://api.cryptonator.com/api/ticker/';
    this.state = {
      btcusd: '-',
      ethusd: '-',
      ltcusd: '-',
      xrpusd: '-',
      bchusd: '-',
      bnbusd: '-',
    };
  }

  componentDidMount() {
    this.updateData('btc-usd', 'btcusd');
    this.updateData('ltc-usd', 'ltcusd');
    this.updateData('eth-usd', 'ethusd');
    this.updateData('xrp-usd', 'xrpusd');
    this.updateData('bch-usd', 'bchusd');
    this.updateData('bnb-usd', 'bnbusd');
    setInterval(() => this.updateData('btc-usd', 'btcusd'), 5000);
    setInterval(() => this.updateData('ltc-usd', 'ltcusd'), 5000);
    setInterval(() => this.updateData('eth-usd', 'ethusd'), 5000);
    setInterval(() => this.updateData('xrp-usd', 'xrpusd'), 5000);
    setInterval(() => this.updateData('bch-usd', 'bchusd'), 5000);
    setInterval(() => this.updateData('bnb-usd', 'bnbusd'), 5000);

    // (OR) This below code also works
    // setInterval(this.updateData, 5000, 'ltc-usd', 'ltcusd');
    // setInterval(this.updateData, 5000, 'btc-usd', 'btcusd');
    // setInterval(this.updateData, 5000, 'eth-usd', 'ethusd');

  }

  updateData = (pair, name) => {
    fetch(this.BASE_URL + pair, {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          [name]: data.ticker
        })
      })
  }

  render() {
    const { btcusd, ltcusd, ethusd, xrpusd, bchusd, bnbusd } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Live Crypto Ticker</h1>
          <p>Updates every 5 seconds</p>
          <p>All prices in US Dollars</p>
        </div>
        <div className='prices'>
          <div>
            <h2>Bitcoin</h2>
            <p>$ {btcusd.price}</p>
          </div>
          <div>
            <h2>Litecoin</h2>
            <p>$ {ltcusd.price}</p>
          </div>
          <div>
            <h2>Ethereum</h2>
            <p>$ {ethusd.price}</p>
          </div>
          <div>
            <h2>Ripple</h2>
            <p>$ {xrpusd.price}</p>
          </div>

          <div>
            <h2>Bitcoin Cash</h2>
            <p>$ {bchusd.price}</p>
          </div>

          <div>
            <h2>Binance coin</h2>
            <p>$ {bnbusd.price}</p>
          </div>

        </div>
      </div>
    )
  }
}

