//optional & deafult parameter

const greet = (empName:String , id:Number) => {
    return `Welcome ${empName} your id is ${id}`
}

let emp = greet('Jagdeep', 1245);

console.log(emp);


// defualt params 

const greet1 = (emp1Name:string , id:number = 1) => {
    return `Welcome ${emp1Name} your id is ${id}`
}

let emp1 = greet1('Abhishek')

console.log(emp1)

// optional Parameters

const greet2 = (emp2Name:string , id?:number) =>{
    return `Welcome ${emp2Name} your id is ${id}`
}

let emp2 = greet2('Ramit');

console.log(emp2);