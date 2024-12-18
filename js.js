// JS MENU RESPONSIVE

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});




// JS SECTION WORKS

var sunnyMenu = document.getElementById("sunnyMenu");
var senatiMenu = document.getElementById("senatiMenu");
var loopMenu = document.getElementById("loopMenu");
var fyloMenu = document.getElementById("fyloMenu");
var crowdMenu = document.getElementById("crowdMenu");
var blogrMenu = document.getElementById("blogrMenu");

var sunny = document.getElementById("sunny");
var senati = document.getElementById("senati");
var loop = document.getElementById("loop");
var fylo = document.getElementById("fylo");
var crowdfund = document.getElementById("crowdfund");
var blogr = document.getElementById("blogr");


var sunnyImg =document.getElementById("imgSunny");
var senatiImg =document.getElementById("imgSenati");
var imgLoop =document.getElementById("imgLoop");
var imgFylo =document.getElementById("imgFylo");
var imgCrowd =document.getElementById("imgCrowd");
var imgBlogr =document.getElementById("imgBlogr");



sunnyMenu.addEventListener('click', ()=>{
    sunny.style.display='block';
    senati.style.display='none';
    loop.style.display='none';
    fylo.style.display='none';
    crowdfund.style.display='none';
    blogr.style.display='none';

    sunnyImg.style.display='block';
    senatiImg.style.display='none';
    imgLoop.style.display='none';
    imgFylo.style.display='none';
    imgCrowd.style.display='none';
    imgBlogr.style.display='none';

});

senatiMenu.addEventListener('click', ()=>{
    sunny.style.display='none';
    senati.style.display='block';
    loop.style.display='none';
    fylo.style.display='none';
    crowdfund.style.display='none';
    blogr.style.display='none';

    sunnyImg.style.display='none';
    senatiImg.style.display='block';
    imgLoop.style.display='none';
    imgFylo.style.display='none';
    imgCrowd.style.display='none';
    imgBlogr.style.display='none';
});

loopMenu.addEventListener('click', ()=>{
    sunny.style.display='none';
    senati.style.display='none';
    loop.style.display='block';
    fylo.style.display='none';
    crowdfund.style.display='none';
    blogr.style.display='none';

    sunnyImg.style.display='none';
    senatiImg.style.display='none';
    imgLoop.style.display='block';
    imgFylo.style.display='none';
    imgCrowd.style.display='none';
    imgBlogr.style.display='none';
});

fyloMenu.addEventListener('click', ()=>{
    sunny.style.display='none';
    senati.style.display='none';
    loop.style.display='none';
    fylo.style.display='block';
    crowdfund.style.display='none';
    blogr.style.display='none';

    sunnyImg.style.display='none';
    senatiImg.style.display='none';
    imgLoop.style.display='none';
    imgFylo.style.display='block';
    imgCrowd.style.display='none';
    imgBlogr.style.display='none';
});

crowdMenu.addEventListener('click', ()=>{
    sunny.style.display='none';
    senati.style.display='none';
    loop.style.display='none';
    fylo.style.display='none';
    crowdfund.style.display='block';
    blogr.style.display='none';

    sunnyImg.style.display='none';
    senatiImg.style.display='none';
    imgLoop.style.display='none';
    imgFylo.style.display='none';
    imgCrowd.style.display='block';
    imgBlogr.style.display='none';
});

blogrMenu.addEventListener('click', ()=>{
    sunny.style.display='none';
    senati.style.display='none';
    loop.style.display='none';
    fylo.style.display='none';
    crowdfund.style.display='none';
    blogr.style.display='block';

    sunnyImg.style.display='none';
    senatiImg.style.display='none';
    imgLoop.style.display='none';
    imgFylo.style.display='none';
    imgCrowd.style.display='none';
    imgBlogr.style.display='block';
});

