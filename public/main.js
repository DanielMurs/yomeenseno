
//////CAROUSEL///////

//elements
const carousel     = document.getElementById('carrusel'),
      leftButton   = document.getElementById('carrLeft'),
      rightButton  = document.getElementById('carrRight'),
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

//events
for(let el of indicators){
    el.addEventListener('click',() => runIndicator(Array.from(indicators).indexOf(el) + 1) )
}
leftButton.addEventListener('click',()=>{
    if(pageCarousel > 1){
        pageCarousel -= 1;
        runCarousel(pageCarousel)
    }
})
rightButton.addEventListener('click',()=>{
    if(pageCarousel < 3){
        pageCarousel += 1;
        runCarousel(pageCarousel)
    }
})

////login/////
const btnLogin = document.getElementById('btnLogin')
const containerHello = document.getElementById('containerHello')
const buttonsHello = document.getElementById('buttonsHello')
const containerLogin = document.getElementById('loginContainer')

const showLogin = () =>{
    containerHello.classList.add('d-none')
    buttonsHello.classList.add('d-none')
    containerLogin.classList.remove('d-none')
}

btnLogin.addEventListener('click', showLogin )