
const productsGrid = document.getElementById('products_sg'); //

window.onload = function () {
    fetch('http://localhost:8080/ords/hr2/products/')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.items.forEach(item => {
                //  va prendre le nombre de review
                fetch(`http://localhost:8080/ords/hr2/reviews/?q={"product_id":${item.product_id}}`)
                    .then(response => response.json())
                    .then(reviewData => {
                        const productDiv = document.createElement('div');
                        productDiv.className = 'product'; //donne un nom de class
                        productDiv.innerHTML = `
                            <div class="product">
                                <div class="product_text">
                                    <div class="product_header">
                                        <h3 class="miniTitle">${item.name}</h3>
                                        <div class="product_price">${item.price}</div>

                                    <p class="product_description">${item.description}</p>
                                </div>
                                <img src="images/${item.name.toLowerCase().replace(/ /g, '-')}.png" alt="${item.name}">
                            </div>
                        `; //  images/iphone-13.jpg for "iPhone 13" obligatoirement se format 
                        productsGrid.appendChild(productDiv);
                    })
                    .catch(error => console.error('Error fetching reviews:', error));
            });
        })
        .catch(error => console.error('Error fetching products:', error));
};
