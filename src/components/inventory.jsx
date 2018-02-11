import React, {Component} from 'react';
import AddFishForm from './addfishform';

import '../styles/inventory.css'

class Inventory extends Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // take a copy of that fish and update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
    <div className="">
      <div className="container" id="fishinventory" key={key}>
        <div className="row">
          <input className="form-control col-sm-4" type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
          <input className="form-control col-sm-4"type="text" name="price" value={fish.price} placeholder="Fish Price"  onChange={(e) => this.handleChange(e, key)}/>
          <select className="form-control col-sm-4"type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
 


          <textarea className="col-sm-12" type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}></textarea>
          <input className="col-sm-12" type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)}/>
          <button className="col-sm-12 btn btn-outline-dark" onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    </div>
  </div>
    )
  }
  render() {
    return (
      <div className="hi">
        <div className="">
          <h1>Inventory</h1>
          <div className="fishwrapper">
          {Object.keys(this.props.fishes).map(this.renderInventory)}
          <AddFishForm {...this.props} />
          </div>
          <button className="btn btn-outline-dark col-sm-12 loadfish" onClick={this.props.loadSamples}>load Sample Fish</button>
        </div>
      </div>
    );
  }
}

export default Inventory;


//  {Object.keys(this.state.fishes).map(this.renderFish)}