
console.log("bonjour")

fetch(' http://localhost:8080')
    .then(response => response.json())
    .then(projects => {
        const gallery = document.querySelector('gallery');
        projet.forEach(projet => {

          
            const img = document.createElement('li');
            
            img.src = projet.imageUrl;
            
            figure.appendChild(img);
            
        })
    })

    
    

    