import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// debugger;
// let obj1 = { a: 1 };
// // obj2的原型是obj1
// let obj2 = Object.create(obj1);
// Object.getPrototypeOf(obj2) === obj1; // true
// obj2.a; // 1

// let obj3 = { b: 2 };
// // 修改obj2的原型为obj3
// Object.setPrototypeOf(obj2, obj3);
// Object.getPrototypeOf(obj2) === obj3; // true
// obj2.a; // undefined
// obj2.b; // 2


// class Name {
//     name = '123';
// }
// class Age {
//     age = 123;
// }
// const name1 = new Name();
// const age1 = new Age();
// Object.setPrototypeOf(name1, age1);
// name1.name = '22';



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
