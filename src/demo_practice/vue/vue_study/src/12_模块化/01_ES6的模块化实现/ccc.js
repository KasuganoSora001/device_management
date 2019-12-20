// 1、导入export
import {flag, sum, num1, Person} from "./aaa.js";

if(flag) {
  console.log(sum(20, 50));
}


console.log(num1);

const p = new Person();
p.run();


// 2、导入export default，可以自定义变量名，因为传递的值只有一个
import addr from "./aaa.js";
// console.log(addr);
addr('export default传递方法函数');


// 3、导入所有
import * as aaa from "./aaa.js";
console.log(aaa.address);