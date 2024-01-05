let figure = document.createElement('figure');

            let img = document.createElement('img');
            img.setAttribute('src', imageUrl);
            img.setAttribute('alt', title);

            let figcaption = document.createElement('figcaption');
            figcaption.innerText = Abajour + Tahina;
            
            gallery.appendChild(figure);
            figure.appendChild(img);
            figure.appendChild(figcaption);

            let section = document.querySelector("section")
            section.appendChild(figure)

            for( Object in data) {
                let div = document.querySelector("div")
                div.innerHTML += 
                `<figure>
                    <img src="${data[Object].imageUrl}" alt="${data[Object].title}>
                    <figcaption>${data[Object].title}<figcaption>
                <figure>`
                }

                let figure = document.createElement("figure")
let nouvelleImage = document.createElement("img")
let nvCapture = document.createElement("figcaption")

    nouvelleImage= document.createElement('img');
    nouvelleImage .setAttribute('src', imageUrl);
    nouvelleImage.setAttribute('alt', title);

    nvCapture = document.createElement('figcaption');
    figcaption.innerText = Abajour + Tahina;         

figure.appendChild(nouvelleImage)
figure.appendChild(nvCapture)

//Insérer dans section
let section = document.querySelector("figure")
div.appendChild(figure)
