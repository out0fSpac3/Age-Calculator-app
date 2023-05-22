"use strict";

const dayErrorRed = document.querySelector('.day')
const monthErrorRed = document.querySelector('.month');
const yearErrorRed = document.querySelector('.year');
const DayError = document.querySelector('.dayError');
const MonthError = document.querySelector('.monthError');
const YearError = document.querySelector('.yearError');
const YearResult = document.querySelector('.yearsOutput');
const MonthResult = document.querySelector('.monthsOutput');
const DayResult = document.querySelector('.daysOutput');
const SubmitBtn = document.querySelector('.btn');
const InputDay = document.querySelector('.inputNumDay');
const InputMonth = document.querySelector('.inputNumMonth');
const InputYear = document.querySelector('.inputNumYear');
const InputRequiredError = 'This field is required';
const InputDayError = 'Must be a valid day';
const InputMonthError = 'Must be a valid month';
const InputYearError = 'Must be a valid year';
const InputMonthErrorPast = 'Must be in the past';
const InputDayErrorPast = 'Must be in the past';
const InputYearErrorPast = 'Must be in the past';
const Canvas = document.querySelector('.can');


function CheckDayInput()
{
    let value = InputDay.value;
    if (value == "")
    {
        dayErrorRed.style.color = "red";
        InputDay.style.borderColor = "red";
        DayError.innerHTML = InputRequiredError;
        return false;
    }
    else if (value < 1 || value > 31)
    {
        dayErrorRed.style.color = "red";
        InputDay.style.borderColor = "red";
        DayError.innerHTML = InputDayError;
        return false;
    }
    else
    {
        dayErrorRed.style.color = "black";
        InputDay.style.borderColor = "black";
        DayError.innerHTML = "";
        return true;
    }
}

function CheckMonthInput()
{
    let value = InputMonth.value;
    let currentMonth = new Date().getMonth();
    if (value == "")
    {
        monthErrorRed.style.color = "red";
        InputMonth.style.borderColor = "red";
        MonthError.innerHTML = InputRequiredError;
        return false;
    }
    else if (value < 1 || value > 12)
    {
        monthErrorRed.style.color = "red";
        InputMonth.style.borderColor = "red";
        MonthError.innerHTML = InputMonthError;
        return false;
    }
    else
    {
        monthErrorRed.style.color = "black";
        InputMonth.style.borderColor = "black";
        MonthError.innerHTML = "";
        return true;
    }
}

function CheckYearInput()
{
    let value = InputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value === "")
    {
        yearErrorRed.style.color = "red";
        InputYear.style.borderColor = "red";
        YearError.innerHTML = InputRequiredError;
        return false;
    }
    else if (value > currentYear)
    {
        yearErrorRed.style.color = "red";
        InputYear.style.borderColor = "red";
        YearError.innerHTML = InputYearErrorPast;
        return false;
    }
    else if (value < 1500)
    {
        yearErrorRed.style.color = "red";
        InputYear.style.borderColor = "red";
        YearError.innerHTML = InputYearError;
        return false;
    }
    else
    {
        yearErrorRed.style.color = "black";
        InputYear.style.borderColor = "black";
        YearError.innerHTML = "";
        return true;
    }
}

function calculateAge(birthday) {
    let birthdate = new Date(birthday);
    let today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        if (months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        days = 30 + days;
    }

    YearResult.innerHTML = years;
    MonthResult.innerHTML = months;
    DayResult.innerHTML = days;
}

SubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let day = CheckDayInput();
    let month = CheckMonthInput();
    let year = CheckYearInput();
    if (!day || !month || !year) return
    let birthday = `${InputMonth.value}/${InputDay.value}/${InputYear.value}`;
    calculateAge(birthday);
    Canvas.style.display = "block";
    setTimeout(function () {
        Canvas.style.display = "none";
    }, 8000);
})