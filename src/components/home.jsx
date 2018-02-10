import React, {Component} from 'react';

//components
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import Fish from  './fish';

//samplefish
import sampleFishes from '../samplefishes'

//css
import '../styles/home.css'
import '../styles/header.css'
import '../styles/order.css'
import '../styles/inventory.css'
import '../styles/fish.css'


class Home extends Component {
  constructor(props){
    super(props);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.renderFish = this.renderFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.state = {
      fishes : {},
      order : {}
    }
  }
  
  addFish(fish, props) {
    var timestamp = (new Date()).getTime();
  
    //update state
    this.state.fishes['fish-' + timestamp] = fish;
    //set state
    this.setState({ fishes: this.state.fishes});
  }

  loadSamples() {
    this.setState({
      fishes : sampleFishes
    });
  }
  renderFish(key) {
    return<Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] +1 || 1;
    this.setState({ order: this.state.order });
  }
  
  render() {
    return (
      <div className="home">
        <div className="container-fluid ">
          <div className="row">
            <div className="col col-md-5 col-sm-6">
              <Header tagline="Fresh Seafood"/>
              <div className="fishcontainer">
              <ul className="list-of-fishes">
              {Object.keys(this.state.fishes).map(this.renderFish)}
              </ul>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6">
              <Order/>
            </div>
            <div className="col col-md-4 col-sm-12">
              <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;



