const name = "cheolyeing",
  age = 27,
  gender = "male";

const sayHi = (name: String, age: number, gender?): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`);
};

sayHi(name, age);

export {};
