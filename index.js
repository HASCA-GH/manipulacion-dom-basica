// EJERCICIO - 02
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');


const btnClick = (e) => {
    e.preventDefault();
    console.log(Number(input1.value) + Number(input2.value));
    let resultado = Number(input1.value) + Number(input2.value)
    
    pResult.innerText = "El resultado es: " + resultado;
    
};

// btn.addEventListener('click', btnClick);
form.addEventListener('submit', btnClick);


// EJERCICIO - 01

// const h1 = document.querySelector('h1');
// const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log(input.value);
// console.log("Nuestro objeto:", {
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });
// h1.innerHTML = "DOM manipulation changed by javascript";
// h1.innerText = "xxDOM manipulation changed by javascript";

// // console.log(h1.getAttribute('pantalla'))
// // h1.setAttribute('pantalla', 'red');
// // console.log(h1.getAttribute('pantalla'))
// h1.classList.add('red', 'verde');
// h1.classList.remove('verde')

// input.value = "xxxxx xxx xx x"


// const img = document.createElement('img');
// img.setAttribute('src', './media/зкуеен-афсу.jpg');
// console.log(document.createElement('img'));

// pid.append(img);