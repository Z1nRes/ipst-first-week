//вывести все числа делящиеся только на себя до 100
function isSimple (n: number): boolean {
    if (n === 1 || n === 0) {
        return false;
    } else {
        for(let i: number = 2; i < n; i++) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

for (let i: number = 0; i <= 100; i++){
    if (isSimple(i)) {
        console.log(i)
    }
}