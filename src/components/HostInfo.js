import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  state = {
    value: '',
    areas: this.props.areas.map(a => {
      return ({
        key: a.name.split('_').map(el => el[0].toUpperCase() + el.slice(1)).join(' '),
        text: a.name.split('_').map(el => el[0].toUpperCase() + el.slice(1)).join(' '),
        value: a.name
      })
    })
  }

  handleChange = (e, {value}) => {
    this.setState({ value }, () => {
      
      this.props.toggleHost(this.props.host, this.state.value)
      this.setState({value: ''})
    })
  }

  toggle = () => {
    
    this.props.toggleHost(this.props.host)
  }

  render(){
    const { value, areas } = this.state

    
    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image floated='left' size='small' src={this.props.host.imageUrl}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.props.host.firstName + ' ' + (this.props.host.lastName === 'n/a' ? '' : this.props.host.lastName)} 
                  <Icon name={this.props.host.gender === 'Male' ? 'man' : 'female'} />
                </Card.Header>
                <Card.Meta>
                  <Radio 
                    style={{margin: "10px"}} 
                    slider 
                    onChange={this.toggle} 
                    label={this.props.host.status === "Active" ? "Active" : "Decommissioned"} 
                    checked={this.props.host.status === "Active"}
                  />
                </Card.Meta>

                <Divider />
                Current Area:
                <Dropdown
                  onChange={this.handleChange}
                  value={value}
                  selection
                  options={areas}
                />

              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default HostInfo
