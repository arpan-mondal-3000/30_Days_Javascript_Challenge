function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  // setUsername(username) // this function is called but it uses its own context which will be deleted after it has been executed
  setUsername.call(this, username); // using the call method to a function we can explicitly tell the context to the function which has been called
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
