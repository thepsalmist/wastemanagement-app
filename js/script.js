var client;
var recycler;

function Client(name, email, address, username, password, number) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.password = password;
  this.number = number;
}

function Recycler(name, email, address, username, password, number) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.password = password;
  this.number = number;
}


//User Interface

$(document).ready(function() {
  $("#clientSubmit").click(function(event) {
    event.preventDefault();
    var clientName = $("#clientName").val;
    var clientAddress = $("#clientAddress").val;
    var clientNumber = $("#clientNumber").val;
    var clientEmail = $("#clientEmail").val;
    var clientUsername = $("#clientUsername").val;
    var clientPassword = $("#clientPassword").val;
    console.log(clientName);



  });









});