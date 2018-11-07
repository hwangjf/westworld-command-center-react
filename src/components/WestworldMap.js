import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

class WestworldMap extends Component {
  
  filteredHosts = (arr, area) => {
    return arr.filter(host => {
      // console.log(host, area)
      return host.area === area.name
    })
  }

  render(){
    return (
      <Segment id="map" >
        {this.props.areas.map(area => {
          return <Area key={area.name} area={area} hosts={this.filteredHosts(this.props.hosts, area)} />
        })}
      </Segment>
    )
  }
}

export default WestworldMap
