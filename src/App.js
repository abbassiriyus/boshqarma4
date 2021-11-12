import React, { Component } from 'react';
import Boglanish from './pages/js/Boglanish';
import Dashboard from './pages/js/Dashboard';
import Maktab from './pages/js/Maktab';
import Rahbariyat from './pages/js/Rahbariyat';




export default class App extends Component {
  render() {
    return (
      <div>
       {/* <Dashboard /> */}
        {/* <Maktab /> */}
        <Rahbariyat />
        <Boglanish />
      </div>
    )
  }
}
