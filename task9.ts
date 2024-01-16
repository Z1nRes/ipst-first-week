// Cортируем этот массив методом пузырька [1,2,3,6,8,1,6,3,2,1,0,4] и склеиваем с массивом строк ['one', 'two','three']
// решенным заданием будет сичтаться массив [0, 1, 1, 1, 2, 2, 3, 3, 4, 6, 6, 8, 'one', 'two','three']

const arrNumbs: number[] = [1,2,3,6,8,1,6,3,2,1,0,4];
const arrStr: string[] = ['one', 'two','three'];

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

console.log(`Исходный массив чисел:\n${arrNumbs}\n`)
console.log(`Отсортированный массив чисел:\n ${bubbleSort(arrNumbs)}\n`)
console.log(`Склееный массив:\n ${[...bubbleSort(arrNumbs), ...arrStr]}`)
