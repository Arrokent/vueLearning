// ES6 module
import {name, age} from './js/info.js';
import {sum, mul} from './js/functions';

console.log("info:" +name, age);
console.log("20 + 30 = " +sum(20, 30));
console.log("20 * 30 = " +mul(20, 30));

// error import css
require('./css/bodyStyle.css');
// must use css loader
// to change the css into js