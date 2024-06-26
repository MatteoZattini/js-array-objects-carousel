
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let contenitore = document.getElementById("tuttoContainer")
let btnAvanti = document.getElementById("avanti")
let btnIndietro = document.getElementById("indietro")
// let nxtImg;

for (const img of images) {
    let slide = document.createElement("div")
    slide.classList.add("imgContainer", "d-none")
    
    contenitore.append(slide)
    slide.innerHTML = `<img class="object-fit-cover w-100 h-custom" src="${img.image}" alt="">
    <h2 class="bottom-left">${img.title}</h2>
    <p class="bottom-left2">${img.text}</p>`
}

let imgActive = 0;
let imgContainers = document.querySelectorAll(".imgContainer")
imgContainers[imgActive].classList.remove("d-none")

btnAvanti.addEventListener("click", function(){
    // imgactive ++ ridare il d none e toglierlo alla successiva
    // imgContainers[imgActive].classList.add("d-none")
    // imgActive += + 1
    // imgContainers[imgActive].classList.remove("d-none")
    
    if(imgActive < 4){
        imgContainers[imgActive].classList.add("d-none")
        // imgActive += + 1
        imgActive++
        imgContainers[imgActive].classList.remove("d-none")
    } else {
        imgContainers[imgActive].classList.add("d-none")
        imgActive = 0
        imgContainers[imgActive].classList.remove("d-none")
    }

})

btnIndietro.addEventListener("click", function(){
    // imgContainers[imgActive].classList.add("d-none")
    // imgActive += - 1
    // imgContainers[imgActive].classList.remove("d-none")
    if(imgActive > 0) {
        imgContainers[imgActive].classList.add("d-none")
        // imgActive += - 1
        imgActive--
        imgContainers[imgActive].classList.remove("d-none")
    } else {
        imgContainers[imgActive].classList.add("d-none")
        imgActive = 4
        imgContainers[imgActive].classList.remove("d-none")
    }
})



