// //Accessing Object Properties with Variables

// //object with properties
// const someObj = {
//     propName: "John"
// };

// //accessing object with variables
// function proPrefix(str)
// {
//     const s = "prop";
//     return s + str;
// }

// const somePrefix = proPrefix("Name");
// console.log(somePrefix);
// console.log(someObj[somePrefix]);

const aDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!'],
    123: "Prop name is a digit"
}

aDog.name = 'Happy Camper';
console.log(aDog[123]);
console.log(aDog['friends']);

// //Add New Properties to a JavaScript Object
// aDog.healthCondition = "Very good";
// console.log(aDog);

// //Delete Properties from a JavaScript Object
// //using delete keyword we can delete a property from an object
// delete aDog.healthCondition;
// console.log(aDog);

// //Testing Objects for Properties
// //to check does the property exist or not
// console.log(aDog.hasOwnProperty('friends'));

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp))
//     {
//       return obj[checkProp];
//     }else{
//       return "Not Found";
//     }
//     // Only change code above this line
//   }
// console.log(checkObj(aDog, 'tails'));

// //Accessing Nested Objects
// const ourStorage = {
//     "desk": {
//       "drawer": "stapler"
//     },
//     "cabinet": {
//       "top drawer": { 
//         "folder1": "a file",
//         "folder2": "secrets"
//       },
//       "bottom drawer": "soda"
//     }
//   };
//   console.log(ourStorage.cabinet['top drawer'].folder1);

//   //Accessing Nested Arrays
//   const ourPets = [
//     {
//       animalType: "cat",
//       names: [
//         "Meowzer",
//         "Fluffy",
//         "Kit-Cat"
//       ]
//     },
//     {
//       animalType: "dog",
//       names: [
//         "Spot",
//         "Bowser",
//         "Frankie"
//       ]
//     }
//   ];
// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].animalType);
  
// Only change code below this line
  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if(prop == "tracks" && records[id].hasOwnProperty(prop) === false)
      {
        records[id][prop] = [value];
      }
    
      else if(prop === 'tracks' && value !== '')
      {
        records[id][prop].push(value);
      }
    
      else if(prop != "tracks" && value != '')
      {
            records[id][prop] = value;
      }
    
      else if(value == '')
      {
        delete records[id][prop];
      }
    
      return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 2468, "tracks", "Free")
  console.log(recordCollection);

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1)* arr[n - 1];

    }
    //console.log(multiply(arr, n - 1));
  }

  let arr1 = [3, 4, 2], n = 3;
  console.log(multiply(arr1, n));

  function sum(arr, n) {
    // Only change code below this line
    if(n <=0)
    {
      return 0;
    }else
    {
      return sum(arr, n-1) + arr[n-1];
    }
    // Only change code above this line
  }
  console.log(sum([2, 3, 4], 1));

  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop){
    for(let i=0; i < contacts.length; i++)
    {
      if(contacts[i]['firstName'] === name)
      {
        if(contacts[i].hasOwnProperty(prop))
        {
          return contacts[i][prop];
        }
        else
        {
          return "No Such Property";
        }
      }
    }
    return "No Such Contact";
}
  
  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Kristian", "lastName"));
  console.log(lookUpProfile("Bob", "number"));
  //console.log(contacts[0].hasOwnProperty('firstName'))

  // var vs let
  // var numArray = [];
  // for(var i=0; i < 5; i++)
  // {
  //   numArray.push(i);
  // }
  // console.log(numArray);
  // console.log(i);

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
//console.log(i);

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();

//Mutate an Array Declared with const
const mutableArray = [1, 2, 3];
//mutableArray = [4, 5 , 6] // initializing an array to a const array is unacceptable
mutableArray[1] = 3; //but changing the value of an index is acceptable
console.log(mutableArray);

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  for(let i=0, j=s.length-1; i < j; i++, j--)
  {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  // Only change code above this line
}
editInPlace();
console.log(s);

//Prevent Object Mutation
function freezeObj()
{
  const MATH_CONSTANTS = {
    PI: 3.14
  }

Object.freeze(MATH_CONSTANTS);
try{
  MATH_CONSTANTS.PI = 99;
}catch(ex)
{
  console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Use Arrow Functions to Write Concise Anonymous Functions
//Js allows us to write shorter version of function call by using arrow or we can call arrow function

//normal function
var normalFunc = function(){
  let value = "Normal Function assigned to a variable"
  return value;
}
console.log(normalFunc());

var shorterFun = ()=>{
  return "shorter fucntion assigned to a variable";
}
console.log(shorterFun());

//if shorter fucn is to return only a value than we can omit the curly braces
let shorterFuncOnlyReturnValue = ()=>"this is a returning value from shorterFuncOnlyReturnValue";
console.log(shorterFuncOnlyReturnValue());

//Write Arrow Functions with Parameters
let addNum = (a, b)=>a+b;
console.log(addNum(1, 2));

//if an arrow function has only one parameter then we can omit the curly braces
const doubler = item => item*2;
console.log(doubler(4));

const myContact = (arr1, arr2) => arr1.concat(arr2);
console.log(myContact([1, 2], [3, 4, 5]));