import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import '../styles/animations.css'

var h = require ('../scripts/helpers');



class Order extends Component {
  constructor(props){
    super(props)
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key){
    var fish = this.props.fishes[key];
    var count = this.props.order[key];
    var removeButton = <button className="btn btn-outline-dark btn-sm" onClick={this.props.removeFromOrder.bind(null, key)}>X</button>

    if(!fish) {
      return <li key={key}> Sorry, fish no longer available! {removeButton}</li>
    }
    return(
    <li className="fish-order" key={key}> 
     <span className="">{count}lbs <strong>x</strong> </span> <span>{fish.name} : </span>
    <span className="">{h.formatPrice(count * fish.price)}
    {removeButton}
    </span>
    </li>
    )
  }
  render() {
    var orderIds = Object.keys(this.props.order);

    var total = orderIds.reduce((prevTotal, key)=> {
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      var isAvailable = fish && fish.status === 'available';
      if(fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }
      return prevTotal
    },0);

    return (
      <div className="order-wrapper">
        <h1>Your Order</h1>
      <ReactCSSTransitionGroup className="order" component="ul" transitionName="order" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
         {orderIds.map(this.renderOrder)}
          <li className="total">
            <h3>Total:{h.formatPrice(total)}</h3>
          </li>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Order;
