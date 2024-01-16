//отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5] искомое число 0
const arr: number[] = [6,1,7,3,5,8,0,-1,3,2,4,5];

function selectionSort(arr: number[]): number[] {
    for (let i: number = 0; i < arr.length - 1; i++){
        let minIndex: number = i;
        for ( let j: number = i + 1; j < arr.length; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        if (minIndex !== i){
            let buffer: number = arr[minIndex];
            arr[minIndex] = arr[i]
            arr[i] = buffer
        }
    }
    return arr
}

function binSearch(arr: number[], target: number): string{
    let left: number = 0;
    let right: number = arr.length - 1;
    let mid: number;

    while (left <= right){
        mid = Math.round((right - left) / 2) + left;

        if (target === arr[mid]){
            return 'Индекс искомого числа - ' + mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else if (target > arr[mid]) {
            left = mid + 1;
        }
    }

    return 'Error: Число не найдено...';
}

console.log(`Массив до сортировки:\n ${arr}\n`)
console.log(`Отсортированный массив:\n ${selectionSort(arr)}\n`)
console.log(binSearch(selectionSort(arr), 0))