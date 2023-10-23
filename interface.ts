export interface User{
  name: string;
  age?: number;
  id: number;
  email: string;
}

let { name: userName , email: userLogin } : User = {name: "Mohammad", id:1, email:"mdxrauf@gmail.com"}

interface Employees extends User{
  Salery: number;
}

let employee: Employees = { name:"john", id: 1, email:"JohnDoe@gmail.com", Salery: 1000};

export interface Login {
  login(): User;
}

let [user1, user2, ...restUsers]: User[] = [
  {name: 'Alice', id: 2, email:'alice@example.org'},
  {name: 'Bob',   id: 3, email:'bob@example.net'},
  {name: 'Charlie',id:4,email:'charlie@example.org'},
  {name: 'EFSFSEFSd',id:5,email:'chasdGSFSEDfse@example.org'}
];

console.log(user1);
console.log(user2);
console.log(restUsers[0]);
console.log(...restUsers);

let result = restUsers.filter(user=> user.id > 3);
console.log(result); 