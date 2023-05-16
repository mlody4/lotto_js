'use strict'

const button = document.querySelector('button');
const parent = document.querySelector('.balls');

const addElement = (elem, number) => {

    const element = document.createElement(elem);

    element.textContent = number;
    parent.appendChild(element);

};

button.addEventListener('click', () => {

    const ballsAmount = 6;
    const maxValue = 42;
    const tabRandomNumbers = [];
    const tabFinalNumbers = [];

    parent.innerText = ''; // dzięki temu balls się czyszczą za każdym kliknięciem

    for(let i = 0; i < ballsAmount; i++) {

        const randomNumber = Math.floor(Math.random() * maxValue + 1);
        tabRandomNumbers.push(randomNumber); // wepchnięcie losowych liczb do tablicy tabRandomNumbers

        if (tabFinalNumbers.indexOf(randomNumber) === -1) {

            tabFinalNumbers.push(randomNumber)
            addElement('div', randomNumber);

        } else {

            i--;
            continue;

        } // zapobieganie przed powtórzeniem tych samych liczb
    }
    console.log(tabRandomNumbers)
    console.log(tabFinalNumbers)
});

const tab = [9, 4, 6, 7];

console.log(tab.indexOf(7));

console.log(Math.floor(Math.random() * 10 + 1))