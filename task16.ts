//создать класс calculation , в котором будет одна переменная calculationLine. методы: setterCalculationLine
// который будет к переменной приравнивать значение которое передается, setLastSymbolCalculationLine который будет в
// конец строки прибавлять символ, gettercalCulationLine который будет выводить переменную, lastSymbol получение
// последнего символа, deleteLastSymbol удаление последнего символа из строки

class calculation {
    private calculationLine: string;

    constructor(calcucalationLine: string) {
        this.calculationLine = calcucalationLine;
    }

    set setterCalculationLine(value: string){
        if (value){
            this.calculationLine = value;
        } else {
            console.log('error - setterCalculationLine...');
            return;
        }
    }

    set setLastSymbolCalculationLine(value: string){
        if (value && value.length === 1){
            this.calculationLine += value;
        } else {
            console.log('error - setLastSymbolCalculationLine...');
            return;
        }
    }

    get gettercalCulationLine(){
        return this.calculationLine
    }

    get lastSymbol(){
        return this.calculationLine.slice(-1)
    }

    deleteLastSymbol() {
        return this.calculationLine = this.calculationLine.slice(0, -1)
    }
}

const newCalculationString = new calculation('')

newCalculationString.setterCalculationLine = "loremIpsum";
console.log(`Строка - ${newCalculationString.gettercalCulationLine}`)
newCalculationString.setLastSymbolCalculationLine = "X"
console.log(`Строка + последний символ - ${newCalculationString.gettercalCulationLine}`)
console.log(`Последний символ строки - ${newCalculationString.lastSymbol}`)
newCalculationString.deleteLastSymbol()
console.log(`Строка после удаления последнего символа - ${newCalculationString.gettercalCulationLine}`)