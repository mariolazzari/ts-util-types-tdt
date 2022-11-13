"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let profile = {
    name: "Mario",
    age: 47,
};
console.log(profile);
// record: define key and type
const users = {
    "1": { name: "user one" },
};
// reduce
const data = [
    { name: "Mario", age: 47 },
    { name: "Mariarosa", age: 46 },
];
const result = data.reduce((acc, cur, idx) => {
    acc[idx + ""] = Object.assign({}, cur);
    return acc;
}, {});
console.log(result);
// parameters: assign fx params to a type
function createUser(username, password) {
    return { username, password };
}
const dataInput = ["mario", "123456"];
createUser(...dataInput);
// promise version
const addUser = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        name,
        password,
        secret: 123,
    });
});
