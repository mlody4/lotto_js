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
    parent.innerText = '';

    for(let i = 0; i < ballsAmount; i++) {
        
    }

});