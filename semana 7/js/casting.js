console.log("-------NUMBER-------")
console.log(Number(""));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number("False"))//NaN
console.log(Number([]))//0
console.log(Number(null))//0
console.log(Number(undefined))//NaN

console.log(1+null); //1
console.log(1+undefined);//NaN

console.log("-------BOOLEAN-------")
console.log(Boolean(""))
console.log(Boolean([]))
console.log(Boolean(" "))
console.log(Boolean (0))
console.log(Boolean (100))
console.log(Boolean ("Hola"))
console.log(Boolean (null))
console.log(Boolean (undefined))

console.log("-------BOOLEAN-------")
console.log(false==0)
console.log(" "==" ")
console.log(true==100)
console.log('100'=100)
console.log(Number("hola")==Number(undefined))
console.log(null==undefined)
console.log(null==0)