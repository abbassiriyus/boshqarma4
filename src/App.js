import React, { Component } from 'react';
import Boglanish from './pages/js/Boglanish';
import Dashboard from './pages/js/Dashboard';



export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Dashboard /> */}
        <Boglanish />
       <Dashboard/>
      </div>
    )
  }
}
