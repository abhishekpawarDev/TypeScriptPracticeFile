//Array in TypeScript 

let arr:number[] = [1,23,4,5,7];
let arrData:any[] = [1,23,4,5,7, 'jagdeep'];

console.log(arr)
console.log(arrData)


const arr1:number[] = new Array(1,2,3,4,5,7)

console.log(arr1)

const arr2:string[] = Array.of('Jagdeep' , 'Abhishek')

console.log(arr2)

console.log(arr2.indexOf('Abhishek'))
console.log(arr2[1]);
console.log(arr2.length)

const filterData: any = arrData.filter((i: any) => {
    return i != 'jagdeep'
});

console.log(filterData)

