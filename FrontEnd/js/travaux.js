let url = 'http://localhost:5678/api/works/${id}'
let container = document.getElementById("portfolio")

let getTravaux = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
    })
}

getTravaux

   