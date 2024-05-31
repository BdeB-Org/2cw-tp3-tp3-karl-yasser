window.onload = function () {
    fetch('http://localhost:8080/ords/hr2/products/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const productsContainer = document.getElementById('productsContainer'); //

            data.items.forEach(item => {
                //  va prendre le nombre de review
                fetch(`http://localhost:8080/ords/hr2/reviews/?q={"product_id":${item.product_id}}`)
                    .then(response => response.json())
                    .then(reviewData => {
                        const productDiv = document.createElement('div');
                        productDiv.className = 'product'; //donne un nom de class
                        productDiv.innerHTML = `
                            <div> 
                                <h3 class="miniTitle">${item.name}</h3>
                                <p>${item.description}</p>                           
                                <img src="images/${item.name.toLowerCase().replace(/ /g, '-')}.jpg" alt="${item.name}">
                                <strong>Price:</strong> $${item.price}<br/>
                                <strong>Stock:</strong> ${item.stock_quantity}<br/>
                                <strong>Reviews:</strong> ${reviewData.items.length || 0} reviews
                            </div>
                        `; //  images/iphone-13.jpg for "iPhone 13" obligatoirement se format 
                        productsContainer.appendChild(productDiv);
                    })
                    .catch(error => console.error('Error fetching reviews:', error));
            });
        })
        .catch(error => console.error('Error fetching products:', error));
};
