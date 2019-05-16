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
    console.log("Name")
    var clientName = $("#firstName").val();
    var clientAddress = $("#clientAddress").val();
    var clientNumber = $("#clientNumber").val();
    var clientEmail = $("#clientEmail").val();
    var clientUsername = $("#clientUsername").val();
    var clientPassword = $("#clientPassword").val();

    client = new Client(clientName);
    console.log(clientName)
    console.log(clientAddress)
  });
  $("#recyclerSubmit").click(function(event) {
    event.preventDefault();
    console.log("Name")
    var companyName = $("#companyName").val();
    var companyAddress = $("#companyAddress").val();
    var companyNumber = $("#companyNumber").val();
    var clientEmail = $("#companyEmail").val();
    var companyUsername = $("#companyUsername").val();
    var companyPassword = $("#companyPassword").val();

    recycler = new Recycler(recyclerName);
    console.log(companyName)
    console.log(clientAddress)
  });
});