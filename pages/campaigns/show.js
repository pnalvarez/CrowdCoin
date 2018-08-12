import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../Ethereum/campaign';
import {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../../Ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


class CampaignShow extends Component{

  static async getInitialProps(props){

    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
          };
  }

  renderCards(){

    const {

      minimumContribution,
      balance,
      requestCount,
      approversCount,
      manager
    } = this.props

    const items = [{

        header: manager,
        meta: 'Address of manager',
        description: 'the manager who created this campaign',
        style: {overflowWrap: 'break-word'}
    },
    { header: minimumContribution,
      meta: 'Minimum contribution',
      description: 'You must contribute this minimum contribution to be an approver'
    },
    {header: requestCount,
      meta: 'number of requests',
      description: 'Number of pending requests'
    },
    {header: approversCount,
      meta: 'number of approvers',
      description: 'Number of people contributing'
    },
    {header: web3.utils.fromWei(balance, 'ether'),
      meta: 'current balance',
      description: 'Balance'
    }
  ];
    return <Card.Group items = {items} />;
  }

  render(){
    return (<Layout>
      <h2> Campaign Show</h2>
        <Grid>
        <Grid.Row>
          <Grid.Column width = {10}>
            {this.renderCards()}
          </Grid.Column>

          <Grid.Column width = {6}>
            <ContributeForm address = {this.props.address}/>
          </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column>
          <Link route = {'/campaigns/'+this.props.address+'/requests'}>
            <a>
              <Button primary>View requests</Button>
            </a>
          </Link>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
