function addTwoNumber(num: number): number {
    return num + 5;
}
console.log("Addition = " + addTwoNumber(7));


function yourFullName(fname: string, mname: string, lname: string): string {
    return fname + " " + mname + " " + lname;
}
console.log("Full Name : " + yourFullName("Devavrat", "Kishor", "Wadekar"));

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, age: number, isLogin: boolean = false) => {
    return "Name : " + name + " Age : " + age + " Status : " + isLogin;
}


// Multiple return type
function getValue(myValue: number): boolean | string {
    if (myValue > 5) {
        return true
    }
    return "200 OK"
}

// Arrow Function
const getHello = (s: string): string{
    return "";
}


const heros = ["Thor", "Spider-Man", "Iron-Man"]
heros.map((hero): string => {
    return `hero is ${hero}`
})


// Use void
function consoleError(errmsg: string): void {
    console.log(errmsg);
}
console.log(`Console Error Message ${consoleError("#404")}`);

// Use never
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
console.log(`Console Error Message ${handleError("#404")}`);




export { }