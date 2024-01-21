// >>> GENERATION DES PROJETS

const sectionProjets = document.querySelector(".gallery"); 

let data = null;
let id;
generationProjets(data, null);

// Reset la section projets
function resetSectionProjets() {  
	sectionProjets.innerHTML = "";
}

// Génère les projets
async function generationProjets(data, id) { 
    try {
        const response = await fetch('http://localhost:5678/api/works'); 
        data = await response.json();
    }
    catch{
        const p = document.createElement("p");
        p.classList.add("error");
        p.innerHTML = "";
        sectionProjets.appendChild(p);
        await new Promise(resolve => setTimeout(resolve, 60000));
        window.location.href = "index.html";
    }

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
    
    let btnId1 = document.createElement("button")
    btnId1.innerText =`Objets`
    
    categories.appendChild(btnId1);

    let btnId2 = document.createElement("button")
    btnId2.innerText =`Appartements`
    
    categories.appendChild(btnId2)
     
    let btnId3 = document.createElement("button")
    btnId3.innerText =`Hôtels & restaurants`
    
    categories.appendChild(btnId3)
      
    
btnAll.addEventListener("click", () => { // Tous les projets
    generationProjets(data, 0);})

btnId1.addEventListener("click", () => { // Objets
    generationProjets(data, 1);})

btnId2.addEventListener("click", () => { // Appartements
    generationProjets(data, 2);})

btnId3.addEventListener("click", () => { // Hôtels & restaurants
    generationProjets(data, 3);})


