// >>> GENERATION DES PROJETS

const sectionProjets = document.querySelector(".gallery"); 

let data = null;
let id;
generationTravaux(data, id);

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
    if (id > 0) {
        console.log(id)
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
        figcaption.innerText = data[i].title;
        figure.appendChild(figcaption);
    }
}

//Création d'un bouton "Tous" pour les filtres
categories = document.querySelector("#filtres")

let btnAll = document.createElement("button")
    btnAll.innerText =`Tous`
    btnAll.setAttribute("id", 0)
    categories.appendChild(btnAll);
            
    btnAll.addEventListener("click", () => { // Tous les projets
        generationTravaux(data, 0);})
        
    //Récupération de la liste des catégories via l'API pour générer les autres boutons filtres
    const getCategory = () => {
        fetch('http://localhost:5678/api/categories/')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            
            let categories = document.querySelector("#filtres")
                
                data.forEach(function(categorie) { 
                console.log(categorie)
    
                let button = document.createElement("button")
                button.setAttribute("id", categorie.id)
                button.innerText = categorie.name
                categories.appendChild(button)

                button.addEventListener("click", (e) => {
                    generationTravaux(data, e.currentTarget.id);
                })
            })
        }
    )}
getCategory()   



