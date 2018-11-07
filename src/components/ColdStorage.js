import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = (props) => {

  return(
    <Segment style={{height:'100%'}}>
      <h3 style={{color: 'black'}}>Cold Storage</h3>
      <HostList hosts={props.hosts} handleClickHost={props.handleClickHost} />
    </Segment>
  )
}

export default ColdStorage
