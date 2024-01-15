
//Récuperation de la galerie d'images dans l'API(Swagger) des différents travaux
const getTravaux = () => {
    fetch('http://localhost:5678/api/works/')
    .then(function (res) {
        return res.json()
    })

    //Création des éléments du HTML identique au code de départ 
    .then(function (data) {
        
        const gallerie = document.querySelector(".gallery")

        data.forEach(function(Travaux) {
            
            let eltFigure = document.createElement("figure")

            let eltImage = document.createElement("img");
            
            eltImage.src = Travaux.imageUrl;
            eltImage.alt = Travaux.title;
            eltFigure.appendChild(eltImage)

            let eltFigcaption = document.createElement("figcaption");
            eltFigcaption.innerText = Travaux.title;

            eltFigure.appendChild(eltFigcaption);

            gallerie.appendChild(eltFigure)
            console.log(data)

        })
    })
}
getTravaux()
            
//Récupération des differents filtres pour les travaux
const getCategory = () => {
    fetch('http://localhost:5678/api/categories/')
    .then(function (res) {
        return res.json()
    })

    //Création des éléments "button" à l'intérieur d'une '<div id="filtres"> 'présente dans le HTML
    .then(function (data) {
        
        let categories = document.querySelector("#filtres")
            data.forEach(function(categorie) { 
            console.log(categorie)

            let button = document.createElement("button")
            button.innerText = categorie.name
            
            categories.appendChild(button)
            })

            //récupération des données du tableau dans l'API afin de pouvoir filtrer les travaux de la gallerie selon leur catégorie(Objet, Restaurant, Appartements)
    
            fetch('http://localhost:5678/api/works/')
            .then(function (res) {
                return res.json()
            })
    })
}
getCategory()

//Création d'un bouton '<button>"Tous"</button> pour afficher tous les travaux"
const filtreToutTravaux = () => {

    categories = document.querySelector("#filtres")

    let button = document.createElement("button")
    button.innerText =`Tous`
    categories.appendChild(button)
}
filtreToutTravaux()


