//Завдання #2

function CreateNewUser(firstName, lastName, birthDay) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDay = birthDay;
}

CreateNewUser.prototype.getLogin = function () {
  let newUser = this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
  return newUser;
};

CreateNewUser.prototype.getAge = function () {
  let today = new Date();
  let dateOfBirth = new Date(this.birthDay);
  let year = today.getFullYear() - dateOfBirth.getFullYear();
  let month = today.getMonth() - dateOfBirth.getMonth();
  let date = today.getDate() - dateOfBirth.getDate();
  let count = 0;

  if (year < 0) {
    return 0;
  }
  if (month <= 0 && date <= 0) {
    count -= 1;
  }
  let age = parseInt(year);
  age += count;

  return age;
};

CreateNewUser.prototype.getPassword = function () {
  return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthDay.slice(0, 4);
};

const newUserObj = new CreateNewUser(
  prompt('Enter your Firstname'),
  prompt('Enter your Lastname'),
  prompt('Enter your birthday', 'yyyy.mm.dd'),
);

console.log(newUserObj);

console.log(`Your login is: ${newUserObj.getLogin()}`);

console.log(`Your age is: ${newUserObj.getAge()}`);

console.log(`Your password is: ${newUserObj.getPassword()}`);

// Завдання #3

const arr = ['hello', 'world', 23, '23', null];

const filterBy = (elements, type) => elements.filter((element) => typeof element !== type);

console.log(filterBy(arr, 'string'));

//Домашка #6 перероблена

// function Human(name, food) {
//   this.name = name;
//   this.food = food;
// }

// Human.prototype.favoriteFood = function () {
//   document.write(`Hello, my name is ${this.name}, and my favorite food is ${this.food} <br/>`);
// };

// Human.prototype.letsEat = function () {
//   return `Hey ${this.name}. Lets it some ${this.food} <br/> <hr>`;
// };

// //Екземпляр
// const human1 = new Human('David', 'Pizza');
// const human2 = new Human('Rachel', 'Ice-cream');

// document.write(human1.letsEat());

// human1.favoriteFood();
// human2.favoriteFood();
