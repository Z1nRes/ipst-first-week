//вывести все элементы из двумерного массива [[1,4,5],[1,3,4],[2,6]] добавить все элементы в одномерный массив
// [1,4,5,1,3,4,2,6] и отсоритровать его

const arr: number[][] = [[1,4,5],[1,3,4],[2,6]];
let newArr: number[] = [];

function bubbleSort(arr: number[]): number[] {
    for (let i: number = 0; i < arr.length - 1; i++){
        for (let j: number = arr.length - 1; j > i; j--){
            if (arr[j] < arr[j-1]){
                let buffer: number = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = buffer;
            }
        }
    }
    return arr
}

for (let i: number = 0; i < arr.length; i++){
    for (let j: number = 0; j < arr[i].length; j++){
        newArr.push(arr[i][j])
    }
}

console.log('Исходный двумерный массив:')
console.log(arr)
console.log('\nОдномерный массив из двумерного:')
console.log(newArr)
console.log('\nОтсортированный одномерный массив:')
console.log(bubbleSort(newArr))