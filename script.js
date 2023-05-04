const imagen = document.getElementById('imagen');
const chadFlex = document.getElementById('chad-flex');
const counter = document.getElementById('counter');
let numero = 0;
const start = document.getElementById('start')
const imgInicial = document.getElementById('imgInicial')


imagen.addEventListener('click', ()=>{
    numero++;
    chadFlex.classList.toggle('opacidad');
    counter.innerHTML = `Counter = ` + `${numero}`;
});
start.addEventListener('click', ()=>{
    imgInicial.remove()
    start.remove()
});
