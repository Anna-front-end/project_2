'use strict'

let btnStart = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item');
let	expensesBtn = document.getElementsByTagName('button')[0];
let	optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let	incomeItem = document.querySelector('.choose-income');
let	checkSavings = document.querySelector('#savings');
let	sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money;
let time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

btnStart.addEventListener('click', function(){
    
    time = prompt ("Ввудите дату в формате YYYY-MM-DD", '');
    money = +prompt ("Ваш бюджет на месяц?", ' ');

    while (isNaN(money) || money == '' || money == null) { //проверяем если ввели не цыфры, пустую строку или нажали отмена цикл будет продолжаться, т.е вопрос останется пока не введут цыфру
        money = +prompt ("Ваш бюджет на месяц?", ' ');
    }
    appData.budjet = money;
    appData.timeData = time; 
    budgetValue.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {

        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
               console.log("done");
               appData.expenses[a] = b;
               sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + '';
    }

});

countBtn.addEventListener('click', function(){
    if (appData.budjet != undefined){
        appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }

    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }

});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function(){
    if (appData.saving == true){
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.saving == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.saving == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let key in appData) {
    console.log('Наша программа включает в себя:' + key + '-' + appData[key]);
}









