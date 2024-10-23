//USO DEL OPERADOR SPREAD

// -1 para clona4 (generar copias) arreglos

const numeros=[1,2,3,4,5,6];
const copia=[...numeros];

copia[0]=100;

console.log(numeros);

// 2- Para concatenar arreglos
const arreglo1=[1,2,3];
const arreglo2 =[4,5,6];
const mezcla=[...arreglo1,...arreglo2];
console.log(mezcla)

//3- Para extender objetos
const persona={nombre:"Camila", apellido:"Melara"}
const empleado={...persona,carnet:"AA1111"}
console.log(empleado)

// 4- Pasar elementos como argumentos a funciones
const valores=[10,15,30,40,62,34,8,7]
console.log(Math.max(...valores))