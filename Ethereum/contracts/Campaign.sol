pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

contract Factory{

    address[] public campaigns;

    function createCampaing(uint minimum) public payable{

        address campaign = new Campaign(minimum, msg.sender);
        campaigns.push(campaign);
    }

    function getDeployedCampaigns() public view returns(address[]){
        return campaigns;
    }

}
//99 mil
contract Campaign{

    struct Request{

        string description;
        uint value;
        address recipient;
        mapping(address => bool) approvals;
        bool complete;
        uint approveCounts;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public totalApprovers;
    Request[] public requests;
    uint public requestsCount;

    modifier restricted{
        require(msg.sender == manager);
        _;
    }

    constructor(uint amount, address creator) public payable{

        manager = creator;
        minimumContribution = amount;
        totalApprovers = 0;
    }

    function contribute() public payable{
        require(msg.value >= minimumContribution);

        approvers[msg.sender] = true;
        totalApprovers+=1;
    }
    function createRequest(string _description, uint _value, address _recipient)
    public payable restricted{

        requests.push(Request(_description,_value,_recipient,false,0));
        requestsCount +=1;
    }

    function aproveRequest(uint requestNumber) public payable{
       Request storage request = requests[requestNumber];

        require(approvers[msg.sender]);
        require(requests[requestNumber].approvals[msg.sender] == false);

        request.approvals[msg.sender] = true;
        request.approveCounts += 1;
    }

    function closeRequest(uint requestNumber) public payable restricted{
       Request storage request = requests[requestNumber];

        require(request.approveCounts >= totalApprovers/2);
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(
      uint,
      uint,
      uint,
      uint,
      address
      ){

      return (
          minimumContribution,
          this.balance,
          requests.length,
          totalApprovers,
          manager
        );
    }

    function getRequestCount() public view returns(uint){
      return requests.length;
    }

    function testFunction() public view returns(uint){
      return 1;
    }
}
