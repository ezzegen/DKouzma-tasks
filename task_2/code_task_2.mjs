/* 2. 
Написать модуль, который способен выполнять операции с числами любой длины.
4 метода для сложения, умножения, вычитания и деления.
*/

export class Calculator {

    static sum(num, num2) {
        return String(BigInt(num) + BigInt(num2));
    }

    static mult(num, num2) {
        return String(BigInt(num) * BigInt(num2));
    }

    static diff(num, num2) {
        return String(BigInt(num) - BigInt(num2));
    }

    static division(num, num2) {

        if (+num2 == 0) return 'На ноль делить нельзя!';
        return String(+num / +num2);
    }
}


// console.log(Calculator.sum('233', '56'), '\n');
// console.log(Calculator.diff('5432324242333333333323535252', '546363465352411111111'), '\n')
// console.log(Calculator.mult('466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666',
//     '5555555555555555555555555555555555555'), '\n');
// console.log(Calculator.division('43534523524144234', '0'), '\n');
// console.log(Calculator.division('3458888888888888888888888888888866666666666', '95'))


