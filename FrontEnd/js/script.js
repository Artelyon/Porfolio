const url = 'http://localhost:5678/api/works/'
const container = document.getElementById("portfolio")

const getTravaux = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        
        const gallerie = document.querySelector("gallery")

        for ( eltFigure in data) {

            let eltFigure = document.createElement("figure")

            let eltImage = document.createElement("img");
            eltImage.src = `${data[eltFigure].imageUrl}`;
            eltImage.alt = `${data[eltFigure].title}`;
            eltFigure.appendChild(eltImage)

            let eltFigcaption = document.createElement("figcaption")
            eltFigcaption.innerText = `${data[eltFigure].title}`

            eltFigure.appendChild(eltFigcaption)

            gallerie.appendChild(eltFigure)

        }
            
    })
}

getTravaux()





            



    