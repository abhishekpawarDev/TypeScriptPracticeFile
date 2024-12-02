// array operation and iteration
const fruits:string[] = ['apple' , 'banana' , 'mango' , 'orange'];

console.log(fruits)

const updateFruits = fruits.push('Kiwi');

console.log(fruits)

const removeLastData = fruits.pop();

console.log(fruits)

const arrName:string[] = ['Abhi' , 'jagdeep' , 'shubam' , 'rishav' , 'fahim' , 'sashi'];

// for loop

for(let i = 0 ; i < arrName.length ; i++){
    console.log(arrName[i])
}

// for ..of loop

for(const name of arrName){
    console.log(name)
}

//for each

arrName.forEach((i)=>{
    console.log(i)
}) 