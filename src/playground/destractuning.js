//OBJECT


// const Person = {
//   name: 'Andrew',
//   age: 17,
//   location: {
//     city: "Lisbon",
//     temp: 28
//   }
// };

// const { name:firstName ='Anonnymous', age } = Person;
// const { city, temp: temperature } = Person.location;

// console.log(`${firstName} is ${age}`);
// if (city && temperature) {
//   console.log(`In ${city} temperature is ${temperature}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     Autor: 'Ryan Holiday',
//     publisher:{
//         // name: 'Penguin'
//     }
// };

// const { title, autor } = book;
// const { name:publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);


//ARRAY

const address = ['1299 S Juniper','Philadelphia','Pensolvenia','19200'];

const [, city,state ='New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00','$2.50','$3.00'];

const [coffe, , priceMedium] = item;

console.log(`A Medium ${coffe} costs ${priceMedium}`);