//Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
// а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

class MyString {
    str: string;

    constructor(str: string) {
        this.str = str;
    }

    reverse(){
        return this.str.split("").reverse().join("");
    }

    ucFirst(){
        if (!this.str) return this.str;
        return this.str[0].toUpperCase() + this.str.slice(1);
    }

    ucWords(){
        let words = this.str.split(" ");
        let res = [];
        for (let word in words){
            res.push(words[word][0].toUpperCase() + words[word].slice(1));
        }
        return res.join(" ")
    }
}

const newString = new MyString('lorem ipsum lorem')

console.log(`Оригинальная строка - ${newString.str}`)
console.log(`reverse() - ${newString.reverse()}`)
console.log(`ucFirst() - ${newString.ucFirst()}`)
console.log(`ucWords() - ${newString.ucWords()}`)