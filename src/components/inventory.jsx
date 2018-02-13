import React, {Component} from 'react';
import AddFishForm from './addfishform';
import { app, base, twitterProvider, githubProvider } from '../base';

import '../styles/inventory.css';


class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uid: null,
      owner: null
    }
  }

  componentDidMount() {
      app.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.authHandler(null, { user });
      }
    });
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

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    app.auth().signInWithPopup(provider).then((authData) => {
  });
  }


  logout() {
    app.auth().signOut().then(() => {
    this.setState({ uid: null });
    })
  };

  authHandler(err, authData)  {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    // grab the store info
    const storeRef = app.database().ref(this.props.storeId);

    // query the firebase once for the store data
    storeRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      // claim it as our own if there is no owner already
      if(!data.owner) {
        storeRef.set({
          owner: authData.user.uid
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      });
    });

  }

  renderLogin() {
    return (
      <nav className="login">
        <h1>Inventory</h1>
        <p>Sign in to manage your store's inventory</p>
        <div className="row">
        <button className="github btn btn-dark col-12" onClick={() => this.authenticate(githubProvider)}>Log In with Github</button>
        <button className="twitter btn btn-dark col-12" onClick={() => this.authenticate(twitterProvider)} >Log In with Twitter</button>
        </div>
      </nav>
    )
  }
  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="inventorywrapper" key={key}>
      <div className="container" id="inventory">
        <div className="row">
          <input className="form-control col-sm-4 fishinventory" type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
          <input className="form-control col-sm-4 fishinventory"type="text" name="price" value={fish.price} placeholder="Fish Price"  onChange={(e) => this.handleChange(e, key)}/>
          <select className="form-control col-sm-4 fishinventory"type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)}>
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
 


          <textarea className="col-sm-12 fishinventory form-control" type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}></textarea>
          <input className="col-sm-12 fishinventory" type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)}/>
          <button className="col-sm-12 btn btn-outline-dark form-control" onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    </div>
  </div>
    )
  }
  render() {
    const logout = <button className="btn btn-outline-dark" onClick={this.logout}>Log Out!</button>;
    // check if they are  logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    // Check if they are the owner of the current store
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of this store!</p>
          {logout}
        </div>
      )
    }

    return (
      <div>
        <h1>Inventory</h1>
        {logout}
        <div className="fishwrapper">
          {Object.keys(this.props.fishes).map(this.renderInventory)}
          <AddFishForm addFish={this.props.addFish}/>
        </div>
        <button className="btn btn-outline-dark col-sm-12 loadfish" onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;