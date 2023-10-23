"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: "Mohammad", id: 1, email: "mdxrauf@gmail.com" };
    }
    getNameWithAddress() {
        //return this.name+" "+this.address;
        return `${this.name} ${this.address}`;
    }
}
_Employee_id = new WeakMap();
let emplayee1 = new Employee(1, "Mohammad", {
    street: "ABC",
    city: "Mazar",
    state: "No Clue",
    pin: "560076",
});
Employee.getEmployeeCount();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let manager1 = new Manager(2, "Ali", {
    street: "DEF",
    city: "BIG MAZAR",
    state: "No Clue",
    pin: "5353535",
});
console.log(emplayee1);
console.log(manager1);
emplayee1.empId = 100;
manager1.empId = 200;
let nameWithAddress1;
nameWithAddress1 = emplayee1.getNameWithAddress();
console.log("Employee Name with Address is ", nameWithAddress1);
let nameWithAddress2;
nameWithAddress2 = manager1.getNameWithAddress();
console.log(nameWithAddress2);
console.log(emplayee1.empId);
console.log(manager1.empId);
