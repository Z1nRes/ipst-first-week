//Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]
// Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
type TypeObject = {
    a: number,
    b: number
}

const obj: TypeObject = {
    a: 1,
    b: 2,
}

function convertObjectToArr(obj: TypeObject) {
    let resArr = [];
    let keys = Object.keys(obj)
    for (let key in keys){
        let buffer = [];
        buffer.push(keys[key], obj[keys[key]])
        resArr.push(buffer)
    }
    return resArr
}

console.log("Объект:")
console.log(obj)
console.log("\nВложенный массив из объекта:")
console.log(convertObjectToArr(obj))