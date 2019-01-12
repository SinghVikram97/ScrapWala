import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import PriceList from './components/PriceList';
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import requestPickUp from './components/requestPickUp'
import Category from './components/Category'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className="App">
           <Navbar/>
           <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/price-list" component={PriceList}/>
              <Route exact path="/request-pickup" component={requestPickUp}/>
              <Route exact path="/category-detect" component={Category}/>
              <Route exact path="/sign-in" component={SignIn}/>
              <Route exact path="/sign-out" component={SignOut}/>
           </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
