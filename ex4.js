//exercise4
//4.1

let sheeps = [5,7,300,90,24,50,75];
console.log(`Hello, my name is Hiep and these are my ship sizes: ${sheeps}`);

let totalMoney = 0;

for ( let index = 0; index < 5; index++){
console.log(`MONTH ${index} :`);


//4.2
let max = Math.max.apply(Math, sheeps);
console.log(`Now my biggest sheep has size ${max} let's shear it`);

//4.3
let position = sheeps.indexOf(max);
sheeps[position] = 8;

//4.4
console.log(`After shearing, here is my flock ${sheeps}`);
for( let i = 0; i < sheeps.length; i++){
    sheeps[i] += 50;
}

//4.5
console.log(`One month passed, now here is my flock ${sheeps}`);
}
for( let unit = 0; unit < sheeps.length; unit++){
    totalMoney += sheeps[unit];
}
console.log(`My flock has size in total ${totalMoney}`)
let money = totalMoney * 2;
console.log(`I would get ${totalMoney} * 2$ = ${money}`);