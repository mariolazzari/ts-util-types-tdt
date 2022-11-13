//www.typescriptlang.org/docs/handbook/utility-types.html
import { User } from "./User";

// omit: newly added props will be picked
type UserProfile = Omit<User, "password" | "email">;
let profile: UserProfile = {
  name: "Mario",
  age: 47,
};
console.log(profile);

interface IUserProfile extends Omit<User, "password" | "email"> {}

// pick: newly added props will be missing
type UserProfilePick = Pick<User, "name" | "address">;

// partial: set all props optional
type UserPartial = Partial<User>;
// mix partail and required
type UserName = Partial<User> & { name: string };

// required: set all props required
type UserReq = Required<User>;
// mix partial and required
type UserCity = Required<User> & { name?: string };

// record: define key and type
const users: Record<string, { name: string }> = {
  "1": { name: "user one" },
};

// reduce
const data = [
  { name: "Mario", age: 47 },
  { name: "Mariarosa", age: 46 },
];

const result = data.reduce(
  (acc: Record<string, { name: string; age: number }>, cur, idx) => {
    acc[idx + ""] = {
      ...cur,
    };

    return acc;
  },
  {}
);

console.log(result);

// parameters: assign fx params to a type
function createUser(username: string, password: string) {
  return { username, password };
}

type CreateUserInput = Parameters<typeof createUser>;
const dataInput: CreateUserInput = ["mario", "123456"];
createUser(...dataInput);

// return type:
type CreateUserResult = ReturnType<typeof createUser>;

// promise version
const addUser = async (name: string, password: string) => ({
  name,
  password,
  secret: 123,
});

type addUserReturn = Awaited<ReturnType<typeof addUser>>;
