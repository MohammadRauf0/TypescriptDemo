import { Login, User } from "./interface";

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login{
  //just added this comment to test github
  #id: number;
  protected name: string;
  address: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  login(): User {
    return { name: "Mohammad", id: 1, email: "mdxrauf@gmail.com" }
  }

  getNameWithAddress(): string {
    //return this.name+" "+this.address;
    return `${this.name} ${this.address}`;
  }
}

let emplayee1 = new Employee(1, "Mohammad", {
  street: "ABC",
  city: "Mazar",
  state: "No Clue",
  pin: "560076",
});

Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
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

let nameWithAddress1: string;
nameWithAddress1 = emplayee1.getNameWithAddress();
console.log("Employee Name with Address is ", nameWithAddress1);

let nameWithAddress2: string;
nameWithAddress2 = manager1.getNameWithAddress();
console.log(nameWithAddress2);

console.log(emplayee1.empId);
console.log(manager1.empId);
