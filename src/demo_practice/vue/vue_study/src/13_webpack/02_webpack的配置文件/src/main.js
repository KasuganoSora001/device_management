// ES6写法
import {add} from "./mathUtils";

console.log(add(20, 50));

// commonJS写法
let {name, age, gender} = require('./info.js');

console.log(name, age, gender);