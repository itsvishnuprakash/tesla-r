const menu=document.querySelector('.menu')
const nav=document.querySelector('.navigation')
const closebtn=document.querySelector('.close-btn')
const fullpageelement=document.getElementById('fullpage')

const bluroverlay=document.querySelector('.blur-overlay')

const isactive='is--active'

const toggleNavigation = () => {
    nav.classList.toggle(isactive)
    bluroverlay.classList.toggle(isactive)
    fullpageelement.classList.toggle('no-scroll')
}

const click='click'

menu.addEventListener(click,toggleNavigation)
closebtn.addEventListener(click,toggleNavigation)
bluroverlay.addEventListener(click,toggleNavigation)


new fullpage('#fullpage', {
    autoScrolling:true,
    scrollBar:true,

})



