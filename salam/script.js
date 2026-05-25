// card hover olanda boyuyur
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseover", function(){
card.style.transform = "scale(1.03)";
card.style.transition = "0.3s";
});

card.addEventListener("mouseout", function(){
card.style.transform = "scale(1)";
});

});

// like edende qirmizi olur ve say artır
let hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(function(heart){

heart.addEventListener("click", function(e){

e.preventDefault();

heart.style.color = "red";

let span = heart.parentElement;

let current = Number(span.innerText);

span.innerHTML = '<i class="fa-solid fa-heart" style="color:red;"></i> ' + (current + 1);

});

});
// axtaris inputu yaradir
let input = document.createElement("input");

input.placeholder = "Məqalə axtar...";
input.style.padding = "12px";
input.style.width = "250px";
input.style.marginBottom = "30px";
input.style.border = "1px solid gray";
input.style.borderRadius = "10px";

let container = document.querySelector(".container");

container.insertBefore(input, document.querySelector(".cards"));


// axtaris edir
input.addEventListener("keyup", function(){

let value = input.value.toLowerCase();

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display = "inline-block";
}
else{
card.style.display = "none";
}

});

});