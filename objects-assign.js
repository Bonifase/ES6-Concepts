let options = {name: "bonny", gender: "male"};

let defaults = {role: "Developer"};

let settings = Object.assign({}, defaults, options);
console.log(settings)