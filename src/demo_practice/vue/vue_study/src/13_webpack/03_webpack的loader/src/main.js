// ES6写法
import {add} from "./js/mathUtils";

console.log(add(20, 50));

// commonJS写法
let {name, age, gender} = require('./js/info.js');

console.log(name, age, gender);

// 依赖css文件：commonJS写法
require('./css/normal.css');

// import css from "./css/normal.css";