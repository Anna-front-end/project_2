'use strict'
let money;
let time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", ' ');
    time = prompt ("Ввудите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) { //проверяем если ввели не цыфры, пустую строку или нажали отмена цикл будет продолжаться, т.е вопрос останется пока не введут цыфру
        money = +prompt ("Ваш бюджет на месяц?", ' ');
    }
}
start();


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};



function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
           && a != '' && b != '' && a.lenght < 50) {
               console.log("done");
               appData.expenses[a] = b;
        } else {
            i = i-1;
        }
    }

}
chooseExpenses();


function detectDayBudget () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);

};
detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }

}
detectLevel ();


function checkSavings () {
    if (appData.saving == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего дупозита:" + appData.monthIncome);   
    }
}

checkSavings ();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();


