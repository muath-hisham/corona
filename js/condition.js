const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const mini = document.querySelector(".mini");
const minu = document.querySelector("#minu");
const exit = document.querySelector("#exit");
const home = document.querySelector("#ahome");
const about = document.querySelector("#aabout-corona");
const symptoms = document.querySelector("#asymptoms");
const Prevention = document.querySelector("#aPrevention");
const Treatment = document.querySelector("#aTreatment");
const frequently = document.querySelector("#afrequently");
const news = document.querySelector("#anews");
const nav = document.querySelector("#navbar");
const bhome = document.querySelector("#bhome");
const babout = document.querySelector("#babout-corona");
const bsymptoms = document.querySelector("#bsymptoms");
const bPrevention = document.querySelector("#bPrevention");
const bTreatment = document.querySelector("#bTreatment");
const bfrequently = document.querySelector("#bfrequently");
const bnews = document.querySelector("#bnews");
const icon = document.querySelector(".icon-top");

document.addEventListener('scroll',function(){
    console.log($(document).scrollTop());
    if($(document).scrollTop() >= 100){
        nav.classList.add("navhide");
        $(icon).fadeIn();
    }
    else{
        nav.classList.remove("navhide");
        $(icon).fadeOut();
    }
    if($(document).scrollTop() >= 7386){
        home.classList.remove("active");
        about.classList.remove("active");
        symptoms.classList.remove("active");
        Prevention.classList.remove("active");
        Treatment.classList.remove("active");
        frequently.classList.remove("active");
        news.classList.add("active");
    }
    else if($(document).scrollTop() >= 6715 ){
        home.classList.remove("active");
        about.classList.remove("active");
        symptoms.classList.remove("active");
        Prevention.classList.remove("active");
        Treatment.classList.remove("active");
        frequently.classList.add("active");
        news.classList.remove("active");
    }
    else if($(document).scrollTop() >= 5171 ){
        home.classList.remove("active");
        about.classList.remove("active");
        symptoms.classList.remove("active");
        Prevention.classList.remove("active");
        Treatment.classList.add("active");
        frequently.classList.remove("active");
        news.classList.remove("active");
    }
    else if($(document).scrollTop() >= 3876 ){
        home.classList.remove("active");
        about.classList.remove("active");
        symptoms.classList.remove("active");
        Prevention.classList.add("active");
        Treatment.classList.remove("active");
        frequently.classList.remove("active");
        news.classList.remove("active");
    }
    else if($(document).scrollTop() >= 2299 ){
        home.classList.remove("active");
        about.classList.remove("active");
        symptoms.classList.add("active");
        Prevention.classList.remove("active");
        Treatment.classList.remove("active");
        frequently.classList.remove("active");
        news.classList.remove("active");
    }
    else if($(document).scrollTop() >= 672 ){
        home.classList.remove("active");
        about.classList.add("active");
        symptoms.classList.remove("active");
        Prevention.classList.remove("active");
        Treatment.classList.remove("active");
        frequently.classList.remove("active");
        news.classList.remove("active");
    }
    else {
        home.classList.add("active");
        about.classList.remove("active");
        symptoms.classList.remove("active");
        Prevention.classList.remove("active");
        Treatment.classList.remove("active");
        frequently.classList.remove("active");
        news.classList.remove("active");
    }
    if($(document).scrollTop() >= 14032){
        bhome.classList.remove("active");
        babout.classList.remove("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.remove("active");
        bnews.classList.add("active");
    }
    else if($(document).scrollTop() >= 12656 ){
        bhome.classList.remove("active");
        babout.classList.remove("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.add("active");
        bnews.classList.remove("active");
    }
    else if($(document).scrollTop() >= 10316 ){
        bhome.classList.remove("active");
        babout.classList.remove("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.add("active");
        bfrequently.classList.remove("active");
        bnews.classList.remove("active");
    }
    else if($(document).scrollTop() >= 7778 ){
        bhome.classList.remove("active");
        babout.classList.remove("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.add("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.remove("active");
        bnews.classList.remove("active");
    }
    else if($(document).scrollTop() >= 4496 ){
        bhome.classList.remove("active");
        babout.classList.remove("active");
        bsymptoms.classList.add("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.remove("active");
        bnews.classList.remove("active");
    }
    else if($(document).scrollTop() >= 1273 ){
        bhome.classList.remove("active");
        babout.classList.add("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.remove("active");
        bnews.classList.remove("active");
    }
    else {
        bhome.classList.add("active");
        babout.classList.remove("active");
        bsymptoms.classList.remove("active");
        bPrevention.classList.remove("active");
        bTreatment.classList.remove("active");
        bfrequently.classList.remove("active");
        bnews.classList.remove("active");
    }
});

$(box2).hide();
$(box3).hide();
$(box4).hide();
$(box5).hide();
$(box6).hide();
$(mini).hide();
$(icon).hide();

btn1.addEventListener('click',function(){
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
    $(box1).show();
    $(box2).hide();
    $(box3).hide();
    $(box4).hide();
    $(box5).hide();
    $(box6).hide();
});

btn2.addEventListener('click',function(){
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
    $(box2).show();
    $(box1).hide();
    $(box3).hide();
    $(box4).hide();
    $(box5).hide();
    $(box6).hide();
});

btn3.addEventListener('click',function(){
    btn3.classList.add("active");
    btn2.classList.remove("active");
    btn1.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
    $(box3).show();
    $(box2).hide();
    $(box1).hide();
    $(box4).hide();
    $(box5).hide();
    $(box6).hide();
});

btn4.addEventListener('click',function(){
    btn4.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn1.classList.remove("active");
    btn5.classList.remove("active");
    btn6.classList.remove("active");
    $(box4).show();
    $(box2).hide();
    $(box3).hide();
    $(box1).hide();
    $(box5).hide();
    $(box6).hide();
});

btn5.addEventListener('click',function(){
    btn5.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn1.classList.remove("active");
    btn6.classList.remove("active");
    $(box5).show();
    $(box2).hide();
    $(box3).hide();
    $(box4).hide();
    $(box1).hide();
    $(box6).hide();
});

btn6.addEventListener('click',function(){
    btn6.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
    btn5.classList.remove("active");
    btn1.classList.remove("active");
    $(box6).show();
    $(box2).hide();
    $(box3).hide();
    $(box4).hide();
    $(box5).hide();
    $(box1).hide();
});

minu.addEventListener('click',function(){
    $(mini).fadeIn("slow");
});

exit.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bhome.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

babout.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bsymptoms.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bPrevention.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bTreatment.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bfrequently.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

bnews.addEventListener('click',function(){
    $(mini).fadeOut("slow");
});

$(document).ready(function () {
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fas").addClass("fa-minus").removeClass("fa-plus");
    });
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").addClass("active1");
        $(this).prev(".card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").removeClass("active1");
        $(this).prev(".card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
    });
});