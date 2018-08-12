import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../Ethereum/web3';
import Campaign from '../Ethereum/campaign'

class Requestrow extends Component{


  onApprove = async () => {

    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.aproveRequest(this.props.id).send({from: accounts[0]});
  }

  onClose = async () =>{

    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    await campaign.methods.closeRequest(this.props.id).send({from: accounts[0]});
  }

  render(){

    const {Row, Cell} = Table;
    const {id, request, totalApprovers} = this.props;
    const readyToclose = request.approveCounts >= totalApprovers / 2;
    // const totalApprovers = this.props.totalApprovers;

    return <Row disabled = {request.complete} positive = {readyToclose && !request.complete}>
              <Cell>{id}</Cell>
              <Cell>{request.description}</Cell>
              <Cell>{web3.utils.fromWei(this.props.request.value,'ether')}</Cell>
              <Cell>{request.recipient}</Cell>
              <Cell>{request.approveCounts} / {totalApprovers} </Cell>
              <Cell>
              {request.complete ? null : (
                <Button color = "green" onClick ={this.onApprove}>
                  Approve
                </Button>
              )}
              </Cell>
              <Cell>
              { request.complete ? null :(
                <Button color = "orange" onClick = {this.onClose}>
                    close request
                </Button>
              )}
              </Cell>
            </Row>;
  }
}

export default Requestrow;

//ANGELA
