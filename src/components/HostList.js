import React, { Component }  from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  // console.log(props.hosts)
  
  return (
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        return <Host {...host} handleClickHost={props.handleClickHost} />
      })}
    </Card.Group>
  )
}


export default HostList
