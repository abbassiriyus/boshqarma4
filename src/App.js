import React, { Component } from 'react';
import Dashboard from './pages/js/Dashboard';
import Maktab from './pages/js/Maktab';




export default class App extends Component {
  render() {
    return (
      <div>
       {/* <Dashboard/> */}
        <Maktab />
      </div>
    )
  }
}
