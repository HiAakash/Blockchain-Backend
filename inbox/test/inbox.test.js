const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
// const { isMainThread } = require("worker_threads");
const web3 = new Web3(ganache.provider());
const {interface,bytecode} = require("../compile")



let accounts;
let inbox;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,argument :["Hi There"]})
    .send({from:accounts[0],gas:'1000000'})
});
describe("Inbox",()=>{
    it("Deploys a Contract",()=>{

        console.log(inbox);

    });
});






// class Car{
//     park(){
//         return "stopped";
//     }

//     drive(){
//         return "vroom";
//     }

// }



// let car;
// beforeEach(()=>{
//     car = new Car();
// }
// );

// describe("The Cars",()=>{
//     it ("is Parked",()=>{
//         assert.equal(car.park(),"stopped");

//     })
//     it ("is Driving",()=>{
//         assert.equal(car.drive(),"vroom");

//     })
// });