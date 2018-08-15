const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);    //remove build directory

const campaignPath = path.resolve(__dirname, 'contracts','Campaign.sol'); // read campaign file
const source = fs.readFileSync(campaignPath, 'utf8');

const output = solc.compile(source,1).contracts; //campaign file compiled and contracts obtained

fs.ensureDirSync(buildPath);

for(let contract in output){ //write contracts as jsons

  fs.outputJsonSync(path.resolve(buildPath, contract.replace(':','') + '.json'), output[contract]);
}
