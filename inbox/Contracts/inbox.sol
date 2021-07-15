// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;
contract inbox {
string public message;

function mycon(string Initialmessage) public{
    message = Initialmessage;
}
function setMessage(string newMessage) public {
    message = newMessage;
}
function getMessage()public view returns(string){
    return message;
}


}