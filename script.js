// MOBILE MENU
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{nav.classList.toggle('show');});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        nav.classList.remove('show');
    });
});

// FADE-IN
const elements=document.querySelectorAll('.fade-in');
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
});
elements.forEach(el=>observer.observe(el));

// PIXEL CHARACTER MOVE
const character=document.getElementById('character');
let left=50;
character.style.left=left+'%';
character.style.position='relative';
document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowLeft'){left-=5;if(left<0) left=0;character.style.left=left+'%';}
    if(e.key==='ArrowRight'){left+=5;if(left>90) left=90;character.style.left=left+'%';}
});
