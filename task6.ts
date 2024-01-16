// вывести числа фибаначи до 200

let prev: number = 0; let next: number = 1;

while (prev < 200){
    console.log(prev)
    let temp: number = next;
    next += prev;
    prev = temp;
}