function parseCalculationString(s) //розбиває стрічку на числа та знаки
{ 
    let calculation = [],
    current = ''; //поточне число

    for (let i = 0, ch; ch = s.charAt(i); i++) //перебираєм рядок
    {
        if ('*/+-'.indexOf(ch) > -1) 
        {
            if (current == '' && ch == '-') // якщо в числа є мінус, то добавляєм його в поточну змінну 
            { 
                current = '-';
            } 

            else 
            {
                calculation.push(parseFloat(current), ch); //добалям в кінець масива поточне число та символ
                current = '';
            }
        } 

        else //добавляє в змінну число
        {
            current += s.charAt(i);
        }
    }

    if (current != '') //перевіояє на наявність останнього числа та (за наявності) закидає його в масив
    {
        calculation.push(parseFloat(current));
    }

    return calculation;
}

function calculate(calc) // Проводим обчислення
{ 
    let ops = [                                     //
    {'*': (a, b) => a * b, '/': (a, b) => a / b},   //Створюємо масив де вказуєм властивості операторів
    {'+': (a, b) => a + b, '-': (a, b) => a - b}    //та масив де будуть проводитися обчислення
    ], newCalc = [], currentOp;                     //

    for (let i = 0; i < ops.length; i++)        //    
    {                                           //Перебираєм масиви
        for (let j = 0; j < calc.length; j++)   //
        {
            if (ops[i][calc[j]])                //
            {                                   //Занаходимо та записуєм в поточну операцію оператори
                currentOp = ops[i][calc[j]];    //в порядку 1: *, /  
            }                                   //          2: +, -

            else if (currentOp)     //проводить арифметичні дії з попереднім елементом масиву
            {
                newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } 

            else        //закидує в масив елемент над яким не провелись арифметичні дії
            {       
                newCalc.push(calc[j]);
            }

        }

        calc = newCalc;     //Записуєм результат в старий масив
        newCalc = [];
    }

    return calc[0]; //вивід результату
    
}

let calculateButton = document.getElementById('calculate'), //
userInput = document.getElementById('userInput'),           //Запис елементів в змінні
result = document.getElementById('result');                 //

calculateButton.addEventListener('click',       //Після "кліка" запускає функцію,
function()                                      //яка запише елемент у відповідь
{
    result.innerHTML = "The answer is " + calculate(parseCalculationString(userInput.value));   //вивід результату
}
);