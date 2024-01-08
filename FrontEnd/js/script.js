const url = 'http://localhost:5678/api/works/'
const container = document.getElementById("portfolio")

let getTravaux = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
       
        data.forEach(function(Travaux) {

            let gallerie = document.querySelector("gallery")

            let eltFigure = document.createElement("figure")

            let eltImage = document.createElement("img");
            
            eltImage.src = `${data[Travaux].imageUrl}`;
            eltImage.alt = `${data[Travaux].title}`;
            eltFigure.appendChild(eltImage)

            let eltFigcaption = document.createElement("figcaption");
            eltFigcaption.innerText = `${data[Travaux].title}`;

            eltFigure.appendChild(eltFigcaption);

            gallerie.appendChild(eltFigure)

        })

    })
}
getTravaux()
            
           

            