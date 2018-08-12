import react, { Component } from 'react';
import Layout from '../../../components/Layout';
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../Ethereum/campaign';
import Requestrow from '../../../components/Requestrow';

class RequestIndex extends Component {

  static async getInitialProps(props) {

    const {address} = props.query;
    const campaign = Campaign(address);

    const requestCount = await campaign.methods.getRequestCount().call()

    const totalApprovers = await campaign.methods.totalApprovers().call();

    const requests = await Promise.all(

    Array(parseInt(requestCount)).fill().map((element, index) => {

        return campaign.methods.requests(index).call()

    })

);


    return {address, requests, requestCount, totalApprovers};
  }

  renderrows(){

    return this.props.requests.map((request,index) => {

        return <Requestrow
            key = {index}
            id = {index}
            request = {request}
            address = {this.props.address}
            totalApprovers = {this.props.totalApprovers}
        />

    });
  }

  render() {

    const {Header, Row, HeaderCell, Body} = Table;
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated = {"right"} style = {{marginBottom: 10}}>Add Request</Button>
          </a>
        </Link>
          <Table>
            <Header>
              <Row>
                <HeaderCell> ID</HeaderCell>
                <HeaderCell> Description</HeaderCell>
                <HeaderCell> Amount</HeaderCell>
                <HeaderCell> recipient</HeaderCell>
                <HeaderCell> Approval counts</HeaderCell>
                <HeaderCell> Approved</HeaderCell>
                <HeaderCell> Final</HeaderCell>
              </Row>
            </Header>
            <Body> {this.renderrows()} </Body>
          </Table>
          <div>
          Found {this.props.requestCount} requests
          </div>
      </Layout>
    )
  }
}
export default RequestIndex;
