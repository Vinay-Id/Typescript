var user = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.log("Username: ".concat(user.username));
console.log("Email: ".concat(user.email));
console.log("Age: ".concat(user.age));
console.log("Full Name: ".concat(user.getFullName()));
