import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftMenu } from './leftMenu';
import { RightBody } from './RightBody';
import {items, db} from "./database";


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



function onMenuClicked(menuItem){
  this.setState({
    menu : menuItem,
    menuItem : {
      title : menuItem
    }
  })
}



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: items
    }
    this.onMenuClicked = onMenuClicked.bind(this);
  }

  componentDidMount(){

      this.setState({
        items: items
      });

      
  
  }

  render() {
    const {items} = this.state;

    if(items.about == undefined){
      return <div />;
    }

    return (

      <Router>
        <div className="App">
          <div className="mid-body">
            <LeftMenu current={this.state.menu} onMenuClicked={this.onMenuClicked}  />
            <RightBody items={items} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
