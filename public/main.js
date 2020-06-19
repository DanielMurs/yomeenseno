
//////CAROUSEL///////

//elements
const carousel     = document.getElementById('carrusel'),
      indicators   = document.querySelectorAll('.tab-item')
let   pageCarousel = 1

//functions
const changeIndicator = (index) =>{
    for(let el of indicators){
        el.classList.remove('tab-active')
    }
    indicators[index - 1].classList.add('tab-active')
}

const runIndicator = (indicator) =>{
    pageCarousel = indicator
    runCarousel(indicator)
    changeIndicator(indicator)
} 

const runCarousel = (index)=>{
     switch(index){
        case 1:
            carousel.scrollLeft = 0;
            changeIndicator(index)
            break
        case 2:
            carousel.scrollLeft = carousel.offsetWidth + 16
            changeIndicator(index)
            break
        case 3:
            carousel.scrollLeft = (carousel.offsetWidth + 16)*2
            changeIndicator(index)
            break
    }
}

//intervalo que avanza el slider cada 5 segundos
const intervalTime = setInterval(()=>{
    if(pageCarousel < 3){
        pageCarousel++
    }else{
        pageCarousel = 1
    }
    
    runIndicator(pageCarousel)
},5000 )

//events
for(let el of indicators){
    el.addEventListener('click',() => runIndicator(Array.from(indicators).indexOf(el) + 1) )
}

window.addEventListener('load',()=> intervalTime)


////login/////
const btnLogin = document.getElementById('btnLogin')
const containerHello = document.getElementById('containerHello')
const buttonsHello = document.getElementById('buttonsHello')
const containerLogin = document.getElementById('loginContainer')

const showLogin = () =>{
    containerHello.classList.add('d-none')
    buttonsHello.classList.add('d-none')
    containerLogin.classList.remove('d-none')
    clearInterval(intervalTime)
}

btnLogin.addEventListener('click', showLogin )