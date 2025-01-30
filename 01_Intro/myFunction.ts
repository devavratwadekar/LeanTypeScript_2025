// string
let name: string = "Devavrat";

// number
let age: number = 20;

// boolean
let isLoggedIn: boolean = true;


let profile: string;

function myProfile() {
    let details: string = "Name : " + name + ", Age : " + age + ", Status : " + isLoggedIn;
    return details;
}

profile = myProfile();


export { }