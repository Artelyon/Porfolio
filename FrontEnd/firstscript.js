const url = 'http://localhost:5678/api/works/'
const container = document.getElementById("portfolio")

const getTravaux = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
        
            
        
    })
}
getTravaux()

let figure = document.createElement("figure")
let nouvelleImage = document.createElement("img")
let nvCapture = document.createElement("figcaption")

    nouvelleImage= document.createElement('img');
    nouvelleImage.setAttribute('src', imageUrl);
    nouvelleImage.setAttribute('alt', title);

    nvCapture = document.createElement('figcaption');
    figcaption.innerText = Abajour + Tahina;         

figure.appendChild(nouvelleImage)
figure.appendChild(nvCapture)

//Insérer dans section
let section = document.querySelector("figure")
div.appendChild(figure)


            



    