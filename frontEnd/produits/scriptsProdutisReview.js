document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://localhost:8080/ords/hr2/products/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const product = data.items[0];
            const reviewsData = JSON.parse(localStorage.getItem('productReviews')) || {};
            const reviewsCount = reviewsData[product.product_id] || 'No';

            document.getElementById('product_name').textContent = product.name || 'No name available';
            document.getElementById('product_description').textContent = product.description || 'No description available';
            document.getElementById('product_price').textContent = 'Price: ' + product.price + '$';
            document.getElementById('product_img').src = "../images/" + product.name.toLowerCase().replace(/ /g, '-') + ".png";

            document.querySelector('.tag:last-child').textContent = product.stock_quantity + ' available';
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});
