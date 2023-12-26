
fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(projects => {
        const gallery = document.querySelector('gallery');
        projects.forEach(projects => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            img.src = project.imageUrl;
            img.alt = project.title;
            figcaption.textContent = project.title;
            
            gallery.appendChild(figure);
            figure.appendChild(img);
            figure.appendChild(figcaption);


        })
    })
    

    