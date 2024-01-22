// >>> GENERATION DES PROJETS

const sectionProjets = document.querySelector(".gallery"); 

let data = null;
let id;
generationTravaux(id, null);

// Reset la section projets
function resetSectionProjets() {  
	sectionProjets.innerHTML = "";
}

// Génère la gallerie
async function generationTravaux(data, id) { 
    
        const response = await fetch('http://localhost:5678/api/works'); 
        data = await response.json();
    
    resetSectionProjets()

    // Filtre les résultats
    if ([1, 2, 3].includes(id)) {
        data = data.filter(data => data.categoryId == id);}

    // Génère les projets
    for (let i = 0; i < data.length; i++) {
            
        const figure = document.createElement("figure"); 
        sectionProjets.appendChild(figure);
        
        const img = document.createElement("img");
        img.src = data[i].imageUrl;
        img.alt = data[i].title;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = data[i].title;
        figure.appendChild(figcaption);
    }
}

//Création des boutons filtres
categories = document.querySelector("#filtres")

let btnAll = document.createElement("button")
    btnAll.innerText =`Tous`
    categories.appendChild(btnAll);
    
    let btn1 = document.createElement("button")
    btn1.innerText =`Objets`
    categories.appendChild(btn1);

    let btn2 = document.createElement("button")
    btn2.innerText =`Appartements`
     categories.appendChild(btn2)
     
    let btn3 = document.createElement("button")
    btn3.innerText =`Hôtels & restaurants`
    categories.appendChild(btn3)
      
    
btnAll.addEventListener("click", () => { // Tous les projets
    generationTravaux(data, 0);})

btn1.addEventListener("click", () => { // Objets
    generationTravaux(data, 1);})

btn2.addEventListener("click", () => { // Appartements
    generationTravaux(data, 2);})

btn3.addEventListener("click", () => { // Hôtels & restaurants
    generationTravaux(data, 3);})


