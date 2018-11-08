import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'

class Host extends Component {

  render(){
    let style = this.props.selected ? {width: "50px", border: "2px solid red", borderRadius: "5px"} : {width: "50px"}
    // console.log(this.props)  
    return(
      <Card 
        onClick={()=>this.props.handleClickHost(this.props)} 
        style={style}
        raised
        image={this.props.imageUrl}
      />
    )
  }
}

export default Host
