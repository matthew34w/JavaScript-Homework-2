

//Exercise 1

let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function displayFavoriteFood(person) {
    for (let category in person) {
        if (Array.isArray(person[category])) {
            console.log(`${category}: ${person[category].join(", ")}`);
        } else if (typeof person[category] === 'object' && person[category] !== null) {
            console.log(`${category}:`);
            for (let subCategory in person[category][0]) {
                console.log(`  ${subCategory}: ${person[category][0][subCategory]}`);
            }
        } else {
            console.log(`${category}: ${person[category]}`);
        }
    }
}


displayFavoriteFood(person);





//exercise 2

// Create our Person Prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Use an arrow to create the printInfo method
Person.prototype.printInfo = () => {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = (years) => {
  this.age += years;
};


const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);


person1.printInfo();
person2.printInfo();

// increment by 3 years
person1.addAge(3);


person1.printInfo();
person2.printInfo();



// exercise 3

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (typeof str !== 'string') {
        reject(new Error('Input must be a string'));
      } else {
        if (str.length > 10) {
          resolve('Big word');
        } else {
          resolve('Small Number');
        }
      }
    });
  }
  
  // Example 
  checkStringLength('HelloWorld')
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
    });