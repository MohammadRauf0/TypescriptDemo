"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: "Mohammad", id: 1, email: "mdxrauf@gmail.com" };
let employee = { name: "john", id: 1, email: "JohnDoe@gmail.com", Salery: 1000 };
let [user1, user2, ...restUsers] = [
    { name: 'Alice', id: 2, email: 'alice@example.org' },
    { name: 'Bob', id: 3, email: 'bob@example.net' },
    { name: 'Charlie', id: 4, email: 'charlie@example.org' },
    { name: 'EFSFSEFSd', id: 5, email: 'chasdGSFSEDfse@example.org' }
];
console.log(user1);
console.log(user2);
console.log(restUsers[0]);
console.log(...restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
