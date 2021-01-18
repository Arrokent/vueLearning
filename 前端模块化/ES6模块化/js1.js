let name = 'chibiken';
let age =  20;

function sum(num1, num2) {
    return num1 + num2;
}

// export method 1
// 先定义，再导出
export {
    name, sum
}

// export method 2
// 定义的时候就导出
export var num1 = 10;
export function minus(num1, num2) {
    return num1 - num2;
}
export var obj = {num1: 20, num2: 30}

// export class
export class person {
    name = 'jack';
    run() {
        console.log("I am running");
    }
}

// export default
// const message = 'chibiken';
// export default message;

export default function (argument) {
    console.log(argument);
}