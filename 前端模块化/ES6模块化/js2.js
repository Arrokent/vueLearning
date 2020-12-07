import {name, person, sum} from "./js1.js";

console.log(name);
console.log(sum(20, 30));

let ps = new person();
console.log(ps.name);
ps.run();

// 只能导入一个默认值, 不用加括号, 自己命名
import mes from "./js1.js"
console.log(mes);
mes('hello');

import * as js1Obj from "./js1.js";

console.log(js1Obj.name);