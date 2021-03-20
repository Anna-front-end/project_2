'use strict'

let money = ("Ваш бюджет на месяц?", ' ');
let time = ("Ввудите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
let a1 = ("Введите обязательную статью расходов в этом месяце", '');
let a2 = ("Во сколько обойдется?", '');
let a3 = ("Введите обязательную статью расходов в этом месяце", '');
let a4 = ("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
console.log(appData.expenses)
alert(appData.budjet/30);

