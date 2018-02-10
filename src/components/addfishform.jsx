import React, {Component} from 'react';

import '../styles/addfishform.css'

class AddFishForm extends Component {
  render() {
    return (
      <div id="fishform" className="container-fluid">
        <form className="fish-edit" onSubmit={this.createFish}>
          <div className="row">
            <input className="col-sm-4 form-control" type="text" ref="name" placeholder="Fish Name"/>
            <input className="col-sm-4 form-control" type="text" ref="price" placeholder="Fish Price"/>
            <select className="col-sm-4 form-control" ref="status">
              <option value="available">Fresh!</option>
              <option value="unavailable">Sold Out!</option>
            </select>
          <textarea className="col-sm-12 form-control" type="text" ref="desc" placeholder="Desc"></textarea>
          <input className="col-sm-12 form-control"type="text" ref="image" placeholder="Url to Image"/>
          <button className="col-sm-12 btn btn-outline-dark form-control" type="submit">+ Add Item</button>
          </div>
        </form>

      </div>
    );
  }
}

export default AddFishForm;
