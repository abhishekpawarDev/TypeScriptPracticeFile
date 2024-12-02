// function invocation

const sum = (a:number , b:number):number => {
    return a + b;
}

console.log(sum(1 , 2))

const Intro = (name:string, age:number):string => {
    return (`Hello My Name is ${name} and i am ${age} year old`)
}

console.log(Intro('Abhishek' , 22))

const Greet = (name:string , id:number):void => {
    console.log(`Wecome ${name} your id is ${id} `)
}

Greet('Abhishek', 1554)

//palidrome function

const isPalindrome = (args: string): boolean => {
    return args.split('').reverse().join('') === args;
};

console.log(isPalindrome('sas'))

// question