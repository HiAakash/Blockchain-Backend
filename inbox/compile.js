const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxpath = path.resolve(__dirname, 'Contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxpath, 'utf8');

// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[":inbox"];


// var input = {
//     language: 'Solidity',
//     sources: {
//         'inbox.sol' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// };

// const output = JSON.parse(solc.compile(JSON.stringify(input)));

// // module.exports = output.contracts["inbox.sol"].inbox;

// // exports.abi = output.contracts['inbox.sol']['inbox'].abi;
// // exports.bytecode = output.contracts['inbox.sol']['inbox'].evm.bytecode.object;
// const interface = output.Contracts['inbox.sol']['inbox'].abi;
// const bytecode = output.Contracts['inbox.sol']['inbox'].evm.bytecode.object;

// module.exports = {
//     interface,
//     bytecode,
// };