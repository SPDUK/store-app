import React, {Component} from 'react';

//components
import Header from './header';
import Inventory from './inventory';
import Order from './order';

//css
import '../styles/home.css'
import '../styles/header.css'
import '../styles/order.css'
import '../styles/inventory.css'


class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container-fluid ">
          <div className="row">
            <div className="col col-md-5 col-sm-6">
              <Header tagline="Fresh Seafood"/>
            </div>
            <div className="col col-md-3 col-sm-6">
              <Order/>
            </div>
            <div className="col col-md-4 col-sm-12">
              <Inventory/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
