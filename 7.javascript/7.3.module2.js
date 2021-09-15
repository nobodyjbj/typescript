import add, * as module from './7.3.module1.js';
// import sum, { print } from './7.3.module1.js'; // 함수가 default일때, module1.js에서 add함수이지만 이름을 변경할 수 있다.
// import sum, { print as printMessage } from './7.3.module1.js'; // 함수가 default아닐때, as 를 활용하여 이름을 변경할 수 있다.

console.log(add(1, 2));

module.print();
console.log(module.number);
