const btn = document.getElementById("btn");
const sideBar = document.getElementById("side-bar");
const content = document.querySelector(".content");

let isVisible = false; //<--for boolean version only
// console.log(isVisible);

//boolean method
// btn.addEventListener("click", () => {
    // isVisible =!isVisible;
    // console.log(isVisible);
    // isVisible ? sideBar.classList.add("is-visible"): sideBar.classList.remove("is-visible");
    // btn.classList.toggle("openmenu");
    
    
// });

content.addEventListener("click", () => {
    sideBar.classList.remove("is-visible");
})

btn.addEventListener("click", () => {
    sideBar.classList.toggle("is-visible");
   
    btn.classList.toggle("openmenu");
});



// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
