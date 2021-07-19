
function User(firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName  + lastName;
  this.age = age;
  this.isMale = isMale;

  return;
}

const user1 = new User('Test', 'Testovich', 'Test Testovich', 18, false);
const user2 = new User('Text', 'Textovich', 'Test Testovich', 20, false);
const user3 = new User('Tost', 'Tostovich', 'Test Testovich', 21, true);

console.log(user1);
console.log(user2);
console.log(user3);