import React, {Component} from 'react';
import AddFishForm from './addfishform';

class Inventory extends Component {
  render() {
    return (
      <div className="hi">
        <div className="">
          <h1>Inventory</h1>
          <AddFishForm />
        </div>
      </div>
    );
  }
}

export default Inventory;
