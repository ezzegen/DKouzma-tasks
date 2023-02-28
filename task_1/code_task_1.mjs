/* 1.
1. Написать модуль, который будет включать в себя следующие методы.
1.1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
1.2. Преобразование строки с целью правильно расстановки пробелов.
1.3. Посдчитывающие кол-во слов в строке.
1.4. Подсчитывающий, уникальные слова. 
“Текст, в котором слово текст несколько раз встречается и слово тоже” -
в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“.
Самостоятельно придумать наиболее удачную структуру данных для ответа.
*/

export class ConvertString {

    static toCapitalLetter(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }

    static toCorrectSpaces(str) {
        let arrSpaces = str.split('');

        for (let i = 0; i < (arrSpaces.length); i++) {

            if (arrSpaces[i] == '.'
                || arrSpaces[i] == ','
                || arrSpaces[i] == '!'
                || arrSpaces[i] == '?') {

                arrSpaces[i] += ' ';

                if (arrSpaces[i - 1] == ' ') {
                    arrSpaces.splice(i - 1, 1);
                };
            }
        }
        str = arrSpaces.join('').replace(/ +/g, ' ').trim();

        return str;
    }

    static toCountWords(str) {
        let arrWords = str.split(' ');
        return arrWords.length;
    }

    static toCountUnique(str) {
        str = str.replace(/[.,%]/g, '').toLowerCase();
        let arrUnique = str.split(' ');
        let mapUnique = new Map();

        for (let word of arrUnique) {
            let count = arrUnique.reduce((count, elem) => (elem == word) ? count + 1 : count, 0);
            mapUnique.set(word, count > 1 ? `${count} раза` : `${count} раз`);
        }
        return mapUnique;

    }

}
