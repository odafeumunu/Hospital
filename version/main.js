// To Top
var toTop=document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
	if(window.pageYOffset > 100){
		toTop.classList.add("active");
	}
	else{
		toTop.classList.remove("active");
	}
})

toTop.addEventListener('click', function(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});

// Navbar

var nav = document.querySelector('nav');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 65) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})




// Toggle, Sidebar

var tog1 = document.getElementById('tog1');
var tog2 = document.getElementById('tog2');
var tog3 = document.getElementById('tog3');
var ov1 = document.getElementById('ov1');
var ov2 = document.getElementById('ov2');
var sidebar = document.getElementById('sidebar');
var dark = document.getElementById('dark');


var sidedrop = document.getElementById('sidedrop');
var onep = document.getElementById('onep');
var twop = document.getElementById('twop');
var change = document.getElementById('change');


var sidedrop1 = document.getElementById('sidedrop1');
var onep1 = document.getElementById('onep1');
var twop1 = document.getElementById('twop1');
var change1 = document.getElementById('change1');


var sidedrop2 = document.getElementById('sidedrop2');
var onep2 = document.getElementById('onep2');
var twop2 = document.getElementById('twop2');
var change2 = document.getElementById('change2');


var sidedrop3 = document.getElementById('sidedrop3');
var onep3 = document.getElementById('onep3');
var twop3 = document.getElementById('twop3');
var change3 = document.getElementById('change3');


function openSide() {
    tog1.style.width = '12px';
    tog2.style.width = '16px';
    tog3.style.width = '14px';
    ov1.style.zIndex = -1;
    ov2.style.zIndex = 1;
    sidebar.style.right = "0";
    sidebar.style.opacity = "1";
    dark.style.opacity = "1";
    dark.style.zIndex = "9995";
}

function closeSide() {
    tog1.style.width = '18px';
    tog2.style.width = '28px';
    tog3.style.width = '23px';
    ov1.style.zIndex = 1;
    ov2.style.zIndex = -1;
    sidebar.style.right = '-1000px';
    sidebar.style.opacity = "0";
    dark.style.opacity = "0";
    dark.style.zIndex = "-999";
}


// sidebar drop
function openSideDrop() {
    sidedrop.style.height = "100%";
    sidedrop.style.transform = 'translateY(0px)'
    sidedrop.style.opacity = "1";
    sidedrop.style.pointerEvents = "visible";
    sidedrop.style.zIndex = "1";
    onep.style.display = "none";
    twop.style.display = "flex";
}

function closeSideDrop() {
    sidedrop.style.height = "0";
    sidedrop.style.transform = 'translateY(-100px)'
    sidedrop.style.opacity = "0";
    sidedrop.style.pointerEvents = "none";
    sidedrop.style.zIndex = "-98";
    onep.style.display = "flex";
    twop.style.display = "none";
}


function openSideDrop1() {
    sidedrop1.style.height = "100%";
    sidedrop1.style.transform = 'translateY(0px)'
    sidedrop1.style.opacity = "1";
    sidedrop1.style.pointerEvents = "visible";
    sidedrop1.style.zIndex = "1";
    onep1.style.display = "none";
    twop1.style.display = "flex";
}
function closeSideDrop1() {
    sidedrop1.style.height = "0";
    sidedrop1.style.transform = 'translateY(-100px)'
    sidedrop1.style.opacity = "0";
    sidedrop1.style.pointerEvents = "none";
    sidedrop1.style.zIndex = "-98";
    onep1.style.display = "flex";
    twop1.style.display = "none";
}

function openSideDrop2() {
    sidedrop2.style.height = "100%";
    sidedrop2.style.transform = 'translateY(0px)'
    sidedrop2.style.opacity = "1";
    sidedrop2.style.pointerEvents = "visible";
    sidedrop2.style.zIndex = "1";
    onep2.style.display = "none";
    twop2.style.display = "flex";
}
function closeSideDrop2() {
    sidedrop2.style.height = "0";
    sidedrop2.style.transform = 'translateY(-100px)'
    sidedrop2.style.opacity = "0";
    sidedrop2.style.pointerEvents = "none";
    sidedrop2.style.zIndex = "-98";
    onep2.style.display = "flex";
    twop2.style.display = "none";
}

function openSideDrop3() {
    sidedrop3.style.height = "100%";
    sidedrop3.style.transform = 'translateY(0px)'
    sidedrop3.style.opacity = "1";
    sidedrop3.style.pointerEvents = "visible";
    sidedrop3.style.zIndex = "1";
    onep3.style.display = "none";
    twop3.style.display = "flex";
}
function closeSideDrop3() {
    sidedrop3.style.height = "0";
    sidedrop3.style.transform = 'translateY(-100px)'
    sidedrop3.style.opacity = "0";
    sidedrop3.style.pointerEvents = "none";
    sidedrop3.style.zIndex = "-98";
    onep3.style.display = "flex";
    twop3.style.display = "none";
}


// gallery
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.text-center').show('1000');
        }
        else{
            $('.text-center').not('.' + value).hide('1000');
            $('.text-center').filter('.' + value).show('1000');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
     })
});


// gallery med
$(document).ready(function(){
    $('.item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.wee').show('1000');
        }
        else{
            $('.wee').not('.' + value).hide('1000');
            $('.wee').filter('.' + value).show('1000');
        }
    })

    $('.item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
     })
});


// faq
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.content').show('1000');
        }
        else{
            $('.content').not('.' + value).hide('1000');
            $('.content').filter('.' + value).show('1000');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
     })
});



// Reveal
window.addEventListener('scroll', reveal);
	
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i= 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 160;


        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        
        // else {
        //     reveals[i].classList.remove('active');
        // }
    }
}


// News
var show1 = document.getElementById('show1');
var show2 = document.getElementById('show2');
var show3 = document.getElementById('show3');
var pop = document.getElementById('pop');
var lat = document.getElementById('lat');
var com = document.getElementById('com');


function showNews1() {
    show1.style.opacity = '1';
    show1.style.zIndex = '1';
    show1.style.transition ='all 300ms ease-out';
    pop.style.background = 'transparent';
    pop.style.border = 'none';
    pop.style.borderTop ='2px solid rgb(3, 178, 184)';
    show2.style.opacity = '0';
    show2.style.zIndex = '-1';
    show2.style.transition ='all 300ms ease-out';
    lat.style.background = 'rgb(250, 250, 250)';
    lat.style.border ='1px solid #e7ecee';
    lat.style.borderRight = 'none';
    show3.style.opacity = '0';
    show3.style.zIndex = '-1';
    show3.style.transition ='all 300ms ease-out';
    com.style.background = 'rgb(250, 250, 250)';
    com.style.border = '1px solid #e7ecee';
    com.style.borderRight ='none';
}

function showNews2() {
    show1.style.opacity = '0';
    show1.style.zIndex = '-1';
    show1.style.transition ='all 300ms ease-out';
    pop.style.background = 'rgb(250, 250, 250)';
    pop.style.border = '1px solid #e7ecee';
    pop.style.borderLeft ='none';
    show2.style.opacity = '1';
    show2.style.zIndex = '1';
    show2.style.transition ='all 300ms ease-out';
    lat.style.background = 'transparent';
    lat.style.border ='none';
    lat.style.borderTop = '2px solid rgb(3, 178, 184)';
    show3.style.opacity = '0';
    show3.style.zIndex = '-1';
    show3.style.transition ='all 300ms ease-out';
    com.style.background = 'rgb(250, 250, 250)';
    com.style.border = '1px solid #e7ecee';
    com.style.borderRight ='none';
}

function showNews3() {
    show1.style.opacity = '0';
    show1.style.zIndex = '-1';
    show1.style.transition ='all 300ms ease-out';
    pop.style.background = 'rgb(250, 250, 250)';
    pop.style.border = '1px solid #e7ecee';
    pop.style.borderLeft ='none';
    show2.style.opacity = '0';
    show2.style.zIndex = '-1';
    show2.style.transition ='all 300ms ease-out';
    lat.style.background = 'rgb(250, 250, 250)';
    lat.style.border ='1px solid #e7ecee';
    lat.style.borderLeft = 'none'
    show3.style.opacity = '1';
    show3.style.zIndex = '1';
    show3.style.transition ='all 300ms ease-out';
    com.style.background = 'transparent';
    com.style.border = 'none';
    com.style.borderTop = '2px solid rgb(3, 178, 184)';
}


// Shortcodes
let aler = document.getElementById('alert');
let aler1 = document.getElementById('alert1');
let aler2 = document.getElementById('alert2');
let aler3 = document.getElementById('alert3');


function closeAlert() {
    aler.style.display = 'none';
    aler.style.background = 'transparent';
    aler.style.borderLeftColor = 'transparent';
    aler.style.marginTop = '-15px';
}
function closeAlert1() {
    aler1.style.display = 'none';
    aler1.style.background = 'transparent';
    aler1.style.borderLeftColor = 'transparent';
    aler1.style.marginTop = '-15px';
}
function closeAlert2() {
    aler2.style.display = 'none';
    aler2.style.background = 'transparent';
    aler2.style.borderLeftColor = 'transparent';
    aler2.style.marginTop = '-15px';
}
function closeAlert3() {
    aler3.style.display = 'none';
    aler3.style.background = 'transparent';
    aler3.style.borderLeftColor = 'transparent';
    aler3.style.marginTop = '-15px';
}


// faq
let faqtog = document.querySelector('.faq-tog');
let dropT = document.querySelector('.drop-text');
let faqtog1 = document.querySelector('.faq-tog1');
let dropT1 = document.querySelector('.drop-text1');
let faqtog2 = document.querySelector('.faq-tog2');
let dropT2 = document.querySelector('.drop-text2');
let faqtog3 = document.querySelector('.faq-tog3');
let dropT3 = document.querySelector('.drop-text3');
let faqtog4 = document.querySelector('.faq-tog4');
let dropT4 = document.querySelector('.drop-text4');
let faqtog5 = document.querySelector('.faq-tog5');
let dropT5 = document.querySelector('.drop-text5');
let faqtog6 = document.querySelector('.faq-tog6');
let dropT6 = document.querySelector('.drop-text6');
let faqtog7 = document.querySelector('.faq-tog7');
let dropT7 = document.querySelector('.drop-text7');

faqtog.addEventListener('click', ()=>{
    dropT.classList.toggle('activeS');
});
faqtog1.addEventListener('click', ()=>{
    dropT1.classList.toggle('activeS');
}); 
faqtog2.addEventListener('click', ()=>{
    dropT2.classList.toggle('activeS');
});
faqtog3.addEventListener('click', ()=>{
    dropT3.classList.toggle('activeS');
});
faqtog4.addEventListener('click', ()=>{
    dropT4.classList.toggle('activeS');
});
faqtog5.addEventListener('click', ()=>{
    dropT5.classList.toggle('activeS');
}) 
faqtog6.addEventListener('click', ()=>{
    dropT6.classList.toggle('activeS');
});
faqtog7.addEventListener('click', ()=>{
    dropT7.classList.toggle('activeS');
}); 















