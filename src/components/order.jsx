import React, { Component } from 'react';

var h = require ('../scripts/helpers');


class Order extends Component {
  constructor(props){
    super(props)
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder(key){
    var fish = this.props.fishes[key];
    var count = this.props.order[key];

    if(!fish) {
      return <li key={key}> Sorry, fish no longer available!</li>
    }
    return(
    <li className="fish-order"> 
     <span className="">{count}lbs <strong>x</strong> </span> <span>{fish.name} : </span>
    <span className="">{h.formatPrice(count * fish.price)}
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
      <ul className="order">
      {orderIds.map(this.renderOrder)}
      <li className="total">
        <h3>Total:{h.formatPrice(total)}</h3>
      </li>

      </ul>

      </div>
    );
  }
}

export default Order;
