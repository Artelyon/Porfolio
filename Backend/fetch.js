fetch('http://localhost:file:///C:/Users/Lenovo/Documents/Porfolio/FrontEnd/index.html/api/products')
    .then(response => response.json())
    .then(function (products) {
        const list = document.querySelector('#list');

        products.forEach(function (product) {  
            const listElement = document.createElement('li');
            listElement.innerText = product.name;
            list.appendChild(listElement);
        });
    });

   
   