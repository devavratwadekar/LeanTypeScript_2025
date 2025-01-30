function addTwoNumber(num: number) {
    return num + 5;
}
let addition: number = addTwoNumber(5);
console.log("Addition = " + addition);


function yourFullName(fname: string, mname: string, lname: string) {
    return fname + " " + mname + " " + lname;
}
let fullName = yourFullName("Devavrat", "Kishor", "Wadekar");
console.log("Full Name : " + fullName);

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser= (name: string, age: number, isLogin: boolean = false) => { 
    // return "Name : "+name +" Age : "+age+" Status : "+isLogin;
}

export { }