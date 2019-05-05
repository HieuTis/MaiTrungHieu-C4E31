//Study
//What is nested list?
//A nested list is a list that appears as an element in another list. In this list, the element with index 3 is a nested list.
//Can a list store both integers and strings in it?
//yes, it can.


//Exercise1

// let inventory = {
//       gold: ["500"],
//       pouch: ["flint","twine","gemstone"],
//       backpack: ["xylyphone","dagger","bedroll","bread loaf"],
    
// };
// console.log(inventory);

// //Add a key to inventory called 'pocket'
// //Set the value of 'pocket' to be a list consisting of the strings..
// inventory.pocket =["seashell","strange berry","lint"];
// console.log(inventory);

// //then remove 'dagger'from the list of items stored 'backpack'
// delete inventory.backpack.splice(1,1);        //delete use splice for array, delete for object
// console.log(inventory);

// //Add 50 to the number stored under the 'gold' key
// inventory.gold.push("50");
// console.log(inventory);


//Exercise 2
// let prices={
//     banana: 4,
//     apple: 2,
//     orange: 1.5,
//     pear: 3,
// };

// let stock={
//     banana: 6,
//     apple: 0,
//     orange: 32,
//     pear: 15,
// };

// // console.log(prices);
// // console.log(stock);

// let totalMoney = 0;

// Object.keys(prices).forEach(key => {    
//     let price = prices[key];
//     let stk = stock[key];
//     totalMoney += price * stk;
//     console.log(`${key} \n price: ${price} \n stock: ${stk}`);
// });
// console.log(`${totalMoney}`);






