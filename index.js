const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pontuacao = document.querySelector(".pontuacao");
let acc = 0;
const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 700);
};
const looping = setInterval(() => {
    const marioPosi = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosi = pipe.offsetLeft;
    if (pipePosi <= 150 && marioPosi <= 96 && pipePosi > 0) {
        console.log("ta morto");
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosi}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosi}px`;
    }else{
        acc = acc + 1;
        if(acc > 10){
            pontuacao.textContent = +pontuacao.textContent + 1;
            acc = 0; 
        }
    }
}, 10);
document.addEventListener('keydown', pulo);

