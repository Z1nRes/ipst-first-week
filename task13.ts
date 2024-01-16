//Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.

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
    get getDays(): number{
        return this.days
    }
}

const newWorkerr = new Workerr('Andrew', 'Pshenichnikov', 1000, 14)

console.log("Работник:")
console.log(`Имя - ${newWorkerr.getName}`)
console.log(`Фамилия - ${newWorkerr.getSurname}`)
console.log(`Ставка - ${newWorkerr.getRate}`)
console.log(`Отработанные дни - ${newWorkerr.getDays}`)
console.log(`Зарплата = ${newWorkerr.getSalary()}`)