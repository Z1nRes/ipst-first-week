//Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

class Workerr {

    private name: string;
    private surname: string;
    private rate: number;
    private days: number;

    constructor(name: string, surname: string, rate: number, days: number){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        return this.rate * this.days
    }

    get getName(): string {
        return this.name;
    }
    get getSurname(): string{
        return this.surname
    }
    get getRate(): number{
        return this.rate
    }
    set setRate(value: number) {
        if (!(value <= 0)){
            this.rate = value;
        } else {
            console.log('Недопустимая дневная ставка...');
            return;
        }
    }
    get getDays(): number{
        return this.days
    }
    set setDays(value: number) {
        if (!(31 < value < 0)){
            this.days = value;
        } else {
            console.log('Недопустимое количество дней...');
            return;
        }
    }
}

const newWorkerr = new Workerr('Andrew', 'Pshenichnikov', 1000, 14)

newWorkerr.setDays = 10
newWorkerr.setRate = 2000

console.log("Работник:")
console.log(`Имя - ${newWorkerr.getName}`)
console.log(`Фамилия - ${newWorkerr.getSurname}`)
console.log(`Ставка - ${newWorkerr.getRate}`)
console.log(`Отработанные дни - ${newWorkerr.getDays}`)
console.log(`Зарплата = ${newWorkerr.getSalary()}`)