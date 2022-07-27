// Método Map ----------------------------------------------------------------------------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(callback(array[i], i, array))
  }
  return newArray
}

console.table(map(arrayMap, callbackMap));

// let resposta = arrayMap.map( (element, i, array) =>{
//   return `Número ${element} no index: ${i}, veio desse array: ${array}`;

// })
// console.table(resposta)


//Método Filter --------------------------------------------------------------------------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  let maior2 = []
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array)){
      maior2.push(array[i])
    }
  }
  return maior2
}

console.log(filter(arrayFilter, callbackFilter));

// let filtro = arrayFilter.filter(element =>{
//   return element > 2
// })

// console.log(filtro)


//Método Reduce --------------------------------------------------------------------------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let soma = initialValue
  for(let i = 0; i < array.length; i++){
    soma = callback(soma, array[i])
  }
  return soma
}

 console.log(reduce(arrayReduce, callbackReduce));
 console.log(reduce(arrayReduce, callbackReduce, 50));

//  let total = 0
//  let soma  = arrayReduce.reduce((a, b)=> a + b, total)

//  console.log(soma)