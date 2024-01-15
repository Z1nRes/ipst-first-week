//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"
let str1: string = "дим";
let str2: string = "манек";
let str3: string = "рота";

function polidrom(str: string): string {
    let reverseStr: string = str.split('').reverse().join('');
    reverseStr = reverseStr.replace(reverseStr[0], '');
    let res: string = str + reverseStr;
    return res
}

console.log(polidrom(str1))
console.log(polidrom(str2))
console.log(polidrom(str3))