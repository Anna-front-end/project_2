'use strict'

let money = prompt ("Ваш бюджет на месяц?", ' ');
let time = prompt ("Ввудите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt ("Во сколько обойдется?", '');

    if ((tipeof(a)) === 'string' && (tipeof(a)) != null && (tipeof(b)) != null  && a != '' && b != '' && a.lenght < 50) {

        console.log(done);
        appData.expenses[a] = b; // добавляем ключ(свойство) в обьект через квадратные скобки и его значение 
    } else {
            console.log ("bad resalt");
            i--;
        }

    
};

appData.moneyPerDay = appData.budjet / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}





