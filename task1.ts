//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"
const str: string = 'DDADSADASDAAADS'

let arrFromStr: string[] = str.split(``)

function getUnique(str: string): string {
    let result: string[] = [];

    for (let el of arrFromStr){
        if (!result.includes(el)){
            result.push(el)
        }
    }

    return result.join('')
}

console.log(getUnique(str))