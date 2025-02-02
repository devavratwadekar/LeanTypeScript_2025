"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumber(num) {
    return num + 5;
}
console.log("Addition = " + addTwoNumber(7));
function yourFullName(fname, mname, lname) {
    return fname + " " + mname + " " + lname;
}
console.log("Full Name : " + yourFullName("Devavrat", "Kishor", "Wadekar"));
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, age, isLogin) {
    if (isLogin === void 0) { isLogin = false; }
    return "Name : " + name + " Age : " + age + " Status : " + isLogin;
};
// Multiple return type
function getValue(myValue) {
    if (myValue > 5) {
        return true;
    }
    return "200 OK";
}
// Arrow Function
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "Spider-Man", "Iron-Man"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// Use void
function consoleError(errmsg) {
    console.log(errmsg);
}
console.log("Console Error Message ".concat(consoleError("#404")));
// Use never
function handleError(errmsg) {
    throw new Error(errmsg);
}
console.log("Console Error Message ".concat(handleError("#404")));
