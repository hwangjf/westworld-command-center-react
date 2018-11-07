import React from 'react';
import { Grid } from 'semantic-ui-react';
import Host from './Host'
import HostList from './HostList';
import HostInfo from './HostInfo';
import ColdStorage from './ColdStorage';

class Headquarters extends React.Component {

  filteredHosts = (arr) => {
    return arr.filter(host => {
      return host.area === "cold_storage"
    })
  }
  
  render() {
    return(
      <Grid id="headquarters" celled='internally'>
        <Grid.Column width={10}>
          <ColdStorage hosts={this.filteredHosts(this.props.hosts)} handleClickHost={this.props.handleClickHost} />
        </Grid.Column>

        <Grid.Column width={5}>
          {this.props.selectedHost ?
            <HostInfo toggleHost={this.props.toggleHost} areas={this.props.areas} host={this.props.selectedHost} />
            : null
          }
        </Grid.Column>
      </Grid>
    )
  }
}


export default Headquarters;
