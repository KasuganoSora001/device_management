let name = '小明';

let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if(flag) {
  console.log(sum(20, 50));
}

// 1、导出方式1
export {flag, sum}


// 2、导出方式2
export let num1 = 10;

export class Person {
  run() {
    console.log("run");
  }
}

// 3、export default
export const address = '广州市';

// export default address;

export default function func(arguement) {
  console.log(arguement);
}