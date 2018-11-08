import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {
  state = {
    areas: [],
    hosts: []
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
          let hosts = data.map(host => {
            let obj = { ...host, selected: false }
            return obj
          })
          this.setState({ hosts })
        })
  }

  handleClickHost = (host) => {
    let allHosts = [...this.state.hosts]
    let clickedHost = {...host, selected: true}
    // console.log(clickedHost)
    allHosts = allHosts.map(h => {
      h.selected = false
      return h.firstName === host.firstName ? clickedHost : h
    })
    this.setState({hosts: allHosts})
  }

  toggleHost = (host, value = null) => {
    let toggledHost = {...host}
    console.log(value)
    let allHosts = [...this.state.hosts]
    if(value) {
      if (toggledHost.status === 'Active' && toggledHost.firstName !== 'Beranrd' && value !== 'under_construction') {
        toggledHost.area = value
      } else if(toggledHost.status === 'Active' && toggledHost.firstName === 'Beranrd' && value === 'under_construction') {
        toggledHost.area = value
      } else {
        // debugger
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
      hosts: allHosts
    })
  }

  selectedHost = () => {
    console.log(this.state.hosts.find(host => host.selected === true))
    return this.state.hosts.length > 0 ? this.state.hosts.find(host => host.selected === true) : null
  }

  render(){
    // console.log(this.state.hosts)
    // console.log(this.state.hosts.find(host => host.selected === true))
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} handleClickHost={this.handleClickHost} />
        <Headquarters 
          areas={this.state.areas}
          hosts={this.state.hosts}
          handleClickHost={this.handleClickHost} 
          selectedHost={this.selectedHost()}
          toggleHost={this.toggleHost} 
        />
      </Segment>
    )
  }
}

export default App;
