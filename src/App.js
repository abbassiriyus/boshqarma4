import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
import Footer from './pages/js/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
        <Footer/>
      </div>
    )
  }
}
