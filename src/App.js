import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHost: null
  }

  componentDidMount() {
    fetch(`http://localhost:3001/areas`)
      .then(res => res.json())
      .then(data => {
        this.setState({areas: data})
      })
      .then(()=> fetch(`http://localhost:3001/hosts`))
        .then(res => res.json())
        .then(data => {
          this.setState({hosts: data})
        })
  }

  handleClickHost = (host) => {
    this.setState({selectedHost: host})
  }

  toggleHost = (host, value = null) => {
    let toggledHost = {...host}
    let allHosts = [...this.state.hosts]
    if(value) {
      if (toggledHost.status === 'Active' && toggledHost.firstName !== 'Bernard' && value !== 'under_construction') {
        toggledHost.area = value
      } else if(toggledHost.status === 'Active' && toggledHost.firstName === 'Bernard' && value === 'under_construction') {
        toggledHost.area = value
      } else {
        console.log('hey you are not allowed')
      }
    } else {
      if(toggledHost.status === 'Active') {
        toggledHost.status = 'Decommissioned'
        toggledHost.area = 'cold_storage'
      } else {
        toggledHost.status = 'Active'
      }
    }
    allHosts = allHosts.map(h => {
      return h.firstName === toggledHost.firstName ? toggledHost : h 
    })
    this.setState({
      selectedHost: toggledHost,
      hosts: allHosts
    })
  }

  render(){
    
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} handleClickHost={this.handleClickHost} />
        <Headquarters 
          areas={this.state.areas}
          hosts={this.state.hosts} 
          handleClickHost={this.handleClickHost} 
          selectedHost={this.state.selectedHost} 
          toggleHost={this.toggleHost} 
        />
      </Segment>
    )
  }
}

export default App;
