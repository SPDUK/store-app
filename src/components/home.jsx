import React, {Component} from 'react';
import {base} from '../base';
import Catalyst from 'react-catalyst';
import reactmixin from 'react-mixin';
import PropTypes from 'prop-types'
//components
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import Fish from  './fish';
import About from './about';


//samplefish
import sampleFishes from '../samplefishes'

//css
import '../styles/home.css'
import '../styles/header.css'
import '../styles/order.css'
import '../styles/inventory.css'
import '../styles/fish.css'
import '../styles/animations.css'


class Home extends Component {
  constructor(props){
    super(props);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.renderFish = this.renderFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.state = {
      fishes : {},
      order : {}
    }
  }


  componentDidMount(props) {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
      context: this,
      state: 'fishes'
    });
    var localStorageRef = localStorage.getItem('order-' + this.props.match.params.storeId);
    if(localStorageRef) {
      this.setState({
        order : JSON.parse(localStorageRef)
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('order-' + this.props.match.params.storeId, JSON.stringify(nextState.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  loadSamples() {
    this.setState({
      fishes : sampleFishes
    });
    console.log(process.env.API_KEY);
  }
  renderFish(key) {
    return<Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]} />
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] +1 || 1;
    this.setState({ order: this.state.order });
  }


  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes });
  }

  updateFish = (key, updatedFish) => {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  removeFish = (key) => {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({ fishes });
  };

  removeFromOrder(key) {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }
  
  render() {
    return (
      <div>
      <div className="home">
        <div className="container-fluid ">
          <div className="row">
            <div className="col col-md-5 col-sm-6">
              <Header tagline="Fresh Seafood Market"/>
              <div className="fishcontainer">
              <ul className="list-of-fishes">
              {Object.keys(this.state.fishes).map(this.renderFish)}
              </ul>
              </div>
            </div>
            <div className="col col-md-3 col-sm-6">
              <Order removeFromOrder={this.removeFromOrder} fishes={this.state.fishes} order={this.state.order}/>
            </div>
            <div className="col col-md-4 col-sm-12">
              <Inventory linkState={this.linkState.bind(this)} addFish={this.addFish} updateFish={this.updateFish} removeFish={this.removeFish} loadSamples={this.loadSamples}  fishes={this.state.fishes} />
            </div>
          </div>
        </div>
      </div>
      <About />
      </div>
    );
  } 
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired
}
Inventory.propTypes = {
  linkState : PropTypes.func.isRequired,
  addFish : PropTypes.func.isRequired,
  updateFish : PropTypes.func.isRequired,
  removeFish : PropTypes.func.isRequired,
  loadSamples : PropTypes.func.isRequired,
  fishes :  PropTypes.object.isRequired
}
Order.propTypes = {
  removeFromOrder : PropTypes.func.isRequired,
  fishes : PropTypes.object.isRequired,
  order : PropTypes.object.isRequired
}

reactmixin.onClass(Home, Catalyst.LinkedStateMixin)
export default Home;



