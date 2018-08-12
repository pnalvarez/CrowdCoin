import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import instance from '../Ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component{

  static async getInitialProps(){

    const campaigns = await instance.methods.getDeployedCampaigns().call();
    return {campaigns};
  }

  async componentDidMount(){

    console.log(campaigns);


  }

  renderCampaigns(){

    const items = this.props.campaigns.map(address =>{

      return{

          header: address,
          description: (<Link route = {'campaigns/'+address}><a>View campaign</a></Link>),
          fluid: true
      };

    });

    return <Card.Group items = {items}/>
  }
    render(){

      return <Layout>
       <div>

      <h2> Open campaigns</h2>
      <Link route = 'campaigns/new'>
      <Button
      floated = "right" content = "Create campaign" icon = "add circle" primary labelPosition = 'left'
      />
      </Link>
      {this.renderCampaigns()}
      </div>
      </Layout>;
    }
}

export default CampaignIndex;
