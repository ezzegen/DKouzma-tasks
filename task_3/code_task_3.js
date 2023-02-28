/* 3. Создать класс данных “Товар”
С полями:
- Название
- Цена
- Количество
- Описание
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
“name-contains-fd&price-=2&quantity->5&description-ends-abc”
“name-starts-fd&quantity-=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

class Product {
    name;
    price = 1;
    quantity = 0;
    description;

    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;

    }


    static filterObj(str, array) {

        // Преобразование строки в массив с удалением лишних элеменов.
        let arrStr = str.split('&')

        for (let elem of arrStr) {
            arrStr[arrStr.indexOf(elem)] = elem.split('-');
        }
        // Для первого варианта строки.
        if ((arrStr[0][1] == 'contains') && (arrStr.length == 4)) {

            // Деструктуризация массива строк для получения рабочих переменных.
            let nameContains = arrStr[0][2];
            let [priceOperator, priceCount] = arrStr[1][1];
            let [quantityOperator, quantityCount] = arrStr[2][1];
            let descriptionEnds = arrStr[3][2]

            // Фильтрация массива объектов по каждому свойству. 
            let checkedName = array.filter(obj => obj.name.includes(nameContains));

            let checkedPrice = checkedName.filter(obj => (
                (priceOperator == '=' && obj.price == priceCount) ||
                (priceOperator == '>' && obj.price > priceCount) ||
                (priceOperator == '<' && obj.price < priceCount)
            ));

            let checkedQuantity = checkedPrice.filter(obj => (
                (quantityOperator == '=' && obj.quantity == quantityCount) ||
                (quantityOperator == '>' && obj.quantity > quantityCount) ||
                (quantityOperator == '<' && obj.quantity < quantityCount)
            ));

            let finalResult = checkedQuantity.filter(obj => obj.description.endsWith(descriptionEnds))

            return finalResult;

            // Для второго варианта строки.
        } else if ((arrStr[0][1] == 'starts') && (arrStr.length == 2)) {

            let nameStarts = arrStr[0][2];
            let [quantityOperator2, quantityCount2] = arrStr[1][1];

            let checkedName = array.filter(obj => obj.name.startsWith(nameStarts));

            let finalResult2 = checkedName.filter(obj => (
                (quantityOperator2 == '=' && obj.quantity == quantityCount2) ||
                (quantityOperator2 == '>' && obj.quantity > quantityCount2) ||
                (quantityOperator2 == '<' && obj.quantity < quantityCount2)
            ));

            return finalResult2;
        }

    }
}

let apple = new Product('apple', 10, 20, 'Very red and sweet');
let cheese = new Product('cheese', 45, 2, 'French cheeze with mold');
let milk = new Product('milk', 15, 20, 'Very white and very milky');
let pork = new Product('pork', 50, 30, 'Juicy steaks');
let endFD = new Product('Hamburger-endfd', 2, 20, 'Very fatty and huge. Why do you need abc')
let fdStarts = new Product('fdstarts', 2000000, 5, 'For task.')

let arrProduct = [apple, cheese, milk, pork, endFD, fdStarts];

controlStr = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
controlStr2 = 'name-starts-fd&quantity-=5';
controlStr3 = 'name-contains-or&price->25&quantity->25&description-ends-ks';

console.log(Product.filterObj(controlStr, arrProduct), '\n');
console.log(Product.filterObj(controlStr2, arrProduct), '\n');
console.log(Product.filterObj(controlStr3, arrProduct));



