

const getTravaux = () => {
    fetch('http://localhost:5678/api/works/')
    .then(function (res) {
        return res.json()
    })
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
            

        })

    })
}
getTravaux()
            
           
const getCategory = () => {
    fetch('http://localhost:5678/api/categories/')
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        
        const categories = document.querySelector("#filtres")

        data.forEach(function(categorie) { 
        
            let button = document.createElement("button")
            button.innerText = categorie.name
            categories.appendChild(button)

        })

    })
}
getCategory()
            