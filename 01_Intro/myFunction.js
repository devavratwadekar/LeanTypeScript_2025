"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var name = "Devavrat";
// number
var age = 20;
// boolean
var isLoggedIn = true;
var profile;
function myProfile() {
    var details = "Name : " + name + ", Age : " + age + ", Status : " + isLoggedIn;
    return details;
}
profile = myProfile();
