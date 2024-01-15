//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

const str: string = 'hello alexandr!';
let res: string = '';
let firstLetter: string = str[0];

for (let i = 0; i < str.length; i++){
    if (str[i] === ' '){
        firstLetter = str[i+1]
        res += ' ' + firstLetter;
    } else {
        res += firstLetter;
    }
}

console.log(res)