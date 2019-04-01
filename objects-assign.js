// Object.assign
let options = {name: "bonny", gender: "male"};

let defaults = {role: "Developer"};

let settings = Object.assign({}, defaults, options);
console.log(settings);

// Arrays
let users = ['sam', 'tyler', 'brooke'];

for(let name of users){
    console.log(name);
}