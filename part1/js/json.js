const user = {id: 1,name: 'Gorib Aamir',job: 'Actor',isGood: true};
console.log(user);
// { id: 1, name: 'Gorib Aamir', job: 'Actor', isGood: true }

// JavaScript Object Notation ->JSON
const jsonString = JSON.stringify(user);
console.log(jsonString);
// {"id":1,"name":"Gorib Aamir","job":"Actor","isGood":true}

const shop = {
    owner : 'Alia',
    address:{
        street: 'Kochukhet bhoter bari',
        city : 'Ranbir',
        country: 'BD'
    },
    products : ['Laptop','Mic','Keyboard'],
    revenue: 45000,
    isOpen : true,
    isNew : false
}
/*
console.log(shop);
{
    owner: 'Alia',
    address: { street: 'Kochukhet bhoter bari', city: 'Ranbir', country: 'BD' },
    products: [ 'Laptop', 'Mic', 'Keyboard' ],
    revenue: 45000,
    isOpen: true,
    isNew: false
  }
*/

const shopJson = JSON.stringify(shop);
console.log(shopJson)
// {"owner":"Alia","address":{"street":"Kochukhet bhoter bari","city":"Ranbir","country":"BD"},"products":["Laptop","Mic","Keyboard"],"revenue":45000,"isOpen":true,"isNew":false}

const shopJsonToParse = JSON.parse(shopJson);
console.log(shopJsonToParse);
/*
{
  owner: 'Alia',
  address: { street: 'Kochukhet bhoter bari', city: 'Ranbir', country: 'BD' },
  products: [ 'Laptop', 'Mic', 'Keyboard' ],
  revenue: 45000,
  isOpen: true,
  isNew: false
}
*/