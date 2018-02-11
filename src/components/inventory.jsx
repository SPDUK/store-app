import React, {Component} from 'react';
import AddFishForm from './addfishform';

class Inventory extends Component {

  render() {
    return (
      <div className="hi">
        <div className="">
          <h1>Inventory</h1>
          <AddFishForm {...this.props} />
          <button className="btn btn-outline-dark col-sm-12" onClick={this.props.loadSamples}>load Sample Fish</button>
        </div>
      </div>
    );
  }
}

export default Inventory;
