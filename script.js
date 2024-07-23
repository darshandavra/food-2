// let slides = document.querySelectorAll(".slide");
// let count = 0;

// slides.forEach(function(slide, index) {
//     slide.style.left = `${index * 100}%`;
// });

// function slider() {
//     slides.forEach(function(curvel) {
//         curvel.style.transition = "transform 0.5s ease-in-out";
//         curvel.style.transform = `translateX(-${count * 100}%)`;
//     });
// }

// setInterval(function () { 
//     count++;
//     if(count === slides.length){
//         count = 0;
//     }
//     slider();
// }, 3000);


//navbar

let baricon = document.getElementById("bar");
let ul = document.querySelector("ul");

baricon.addEventListener("click", function() {
    ul.classList.toggle("showtime");
    if (ul.classList.contains("showtime")) {
        baricon.className = "fa-solid fa-xmark";
    } else {
        baricon.className = "fa-solid fa-bars";
    }
});

let savetheme = localStorage.getItem('theme') || 'light';
document.body.className = savetheme;

const togglelight = document.getElementById('togglelight');
const toggledark = document.getElementById('toggledark');

togglelight.addEventListener('click',function(){
    document.body.className = 'light';
    localStorage.setItem('theme','light');
    togglelight.classList.add('active');
    toggledark.classList.remove('active');
});

toggledark.addEventListener('click',function(){
    document.body.className = 'dark';
    localStorage.setItem('theme','dark');
    toggledark.classList.add('active');
    togglelight.classList.remove('active');
});

if(savetheme==='light')
    togglelight.classList.add('active');

else{
    toggledark.classList.add('active');
}



