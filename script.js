let productsContainer = document.getElementById('productsContainer');

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let products = json.products;
        products.forEach((product) => {
            // console.log(product);
            let productCard = document.createElement('div');
            let title = document.createElement('h1');
            let brand = document.createElement('h3');
            let description = document.createElement('p');
            let price = document.createElement('div');
            let img = document.createElement('img');
            let button = document.createElement("button");
            title.innerHTML = `${product.title}`
            brand.innerHTML = `${product.brand}`
            description.innerHTML = `${product.description}`
            price.innerHTML = "₹" + `${product.price}`
            button.innerHTML = "Add to Cart";
            img.setAttribute('src', product.thumbnail);
            img.style.width = '250px';
            img.style.height = '250px';
            productCard.appendChild(img);
            productCard.appendChild(title);
            productCard.appendChild(brand);
            productCard.appendChild(price);
            productCard.appendChild(description);
            productCard.appendChild(button);
            productsContainer.appendChild(productCard);

        });
    }).catch(error => {
        console.log(error);
    })


const loadData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const json = await res.json();
        let products = json.products;
        products.forEach((product) => {
            // console.log(product);
            let productCard = document.createElement('div');
            let title = document.createElement('h1');
            let brand = document.createElement('h3');
            let description = document.createElement('p');
            let price = document.createElement('div');
            let img = document.createElement('img');
            title.innerHTML = `${product.title}`
            brand.innerHTML = `${product.brand}`
            description.innerHTML = `${product.description}`
            price.innerHTML = `${product.price}`
            img.setAttribute('src', product.thumbnail);
            img.style.width = '250px';
            img.style.height = '250px';
            productCard.appendChild(img);
            productCard.appendChild(title);
            productCard.appendChild(brand);
            productCard.appendChild(price);
            productCard.appendChild(description);
            productCard.appendChild(button)
            productsContainer.appendChild(productCard);
            productsContainer.appendChild(productCard);
        });

        return "data"
    } catch (error) {
        return error;
    }

}




