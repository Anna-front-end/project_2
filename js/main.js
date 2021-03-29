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
    saving: false,
    chooseExpenses: function (){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            
            if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
                   console.log("done");
                   appData.expenses[a] = b;
            } else {
                i = i-1;
            }
        }

    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.saving == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего дупозита:" + appData.monthIncome);   
        }

    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }

    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) != 'string' || typeof(items) == null || items == ''){
            alert('Ошибка!')
            
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt ('Что-то еще?'));
            appData.income.sort(); 
        }
        appData.income.forEach(function(element, i){
            alert('Способы дополнительного заработка:' + (i+1) + '-' + element)
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя:' + key + '-' + appData[key]);
}









