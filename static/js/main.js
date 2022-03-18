const rice = document.querySelector('.rice');
const soup = document.querySelector('.soup');
const noodles = document.querySelector('.noodles');
const rice_menu = document.querySelector('.rice_menu');
const soup_menu = document.querySelector('.soup_menu');
const noodles_menu = document.querySelector('.noodles_menu');
const details = document.querySelector('.details');


rice.addEventListener('click',()=>{
    if(rice_menu.className !== 'rice_menu height'){
        rice_menu.classList.add('height')
        details.classList.add('hide')
        soup_menu.classList.remove('height')
        noodles_menu.classList.remove('height')
    }else{
        rice_menu.classList.remove('height')
        details.classList.remove('hide')
    }    
})

soup.addEventListener('click',()=>{
    if(soup_menu.className !== 'soup_menu height'){
        soup_menu.classList.add('height')
        details.classList.add('hide')
        rice_menu.classList.remove('height')
        noodles_menu.classList.remove('height')
    }else{
        soup_menu.classList.remove('height')
        details.classList.remove('hide')
    }    
})

noodles.addEventListener('click',()=>{
    if(noodles_menu.className !== 'noodles_menu height'){
        noodles_menu.classList.add('height')
        details.classList.add('hide')
        rice_menu.classList.remove('height')
        soup_menu.classList.remove('height')
    }else{
        noodles_menu.classList.remove('height')
        details.classList.remove('hide')
    }    
})
