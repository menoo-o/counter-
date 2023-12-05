document.addEventListener('DOMContentLoaded', () => {

const decrementBtn = document.querySelector('.decreament') 
const increamentBtn = document.querySelector('.increament') 
const resetBtn = document.querySelector('.reset') 
const divCount = document.querySelector(".count");

const h2Count = document.createElement('h2');

let count = 0;
h2Count.textContent = count;
divCount.appendChild(h2Count);



increamentBtn.addEventListener('click', () => {
    h2Count.textContent = count++
})


decrementBtn.addEventListener('click', () =>{
    h2Count.textContent = --count;
})

resetBtn.addEventListener('click', () =>{
    count = 0;
    h2Count.textContent = count;
})


});



