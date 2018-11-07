import React from 'react';
import HostList from './HostList';

const Area = props => {
  // console.log(props)
  const name = (fix) => {
    return fix.split('_').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
  }
  
  const filteredHosts = (arr) => {
    return arr.filter(host => {
      return host.area === props.area.name
    })
  }
  
  return(
    <div style={props.area.style} className='area'>
      <h3>{name(props.area.name)}</h3>
      <HostList hosts={filteredHosts(props.hosts)} handleClickHost={props.handleClickHost} />
    </div>
  )
}

export default Area;
