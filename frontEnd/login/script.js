window.onload = function () {
    fetch('http://localhost:8080/ords/hr2/products/')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Pour voir la structure de la réponse et les données
            const container = document.getElementById('data');
            data.items.forEach(item => {
                const content = document.createElement('div');
                content.innerHTML = `<strong>${item.name}</strong> (${item.description})<br/>Price: $${item.price} - Stock: ${item.stock_quantity}`;
                container.appendChild(content);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};
