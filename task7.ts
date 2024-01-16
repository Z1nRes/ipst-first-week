// В переменной month лежит какое-то число из интервала от 1 до 12(можно рандомайзер сделать).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// В переменной year лежит какой то год например 2022.
// Определите високосный это год или нет.
function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function season(){
    let month: number = randomIntFromInterval(1, 12)

    switch (month){
        case 12:
        case 1:
        case 2:
            console.log('Зима - ' + month);
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна - ' + month);
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето - ' + month);
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень - ' + month);
            break;
    }
}

season()

function leapYear(){
    let year: number = randomIntFromInterval(2020, 2024)

    if (year % 4 == 0){
        console.log(year + ' год - високосный')
    } else {
        console.log(year + ' год - не високосный')
    }
}

leapYear()