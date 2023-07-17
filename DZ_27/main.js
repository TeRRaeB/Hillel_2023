const categoriesContainer = document.getElementById("categories");
const productsContainer = document.getElementById("products");
const productInfoContainer = document.getElementById("product-info");
const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const buyButton = document.getElementById("buy-button");

for (let category in data) {
    let categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    categoryItem.classList.add("category");
    categoryItem.addEventListener("click", function () {
        productsContainer.innerHTML = "";
        data[category].forEach((product) => {
            let productItem = document.createElement("div");
            productItem.textContent = product.name;
            productItem.classList.add("product");
            productItem.addEventListener("click", function () {
                productName.textContent = product.name;
                productDescription.textContent = product.description;
                productInfoContainer.style.display = "block";
            });
            productsContainer.appendChild(productItem);
        });
    });
    categoriesContainer.querySelector("ul").appendChild(categoryItem);
}

buyButton.addEventListener("click", function () {
    alert("Товар куплено");
    productInfoContainer.style.display = "none";
    productName.textContent = "";
    productDescription.textContent = "";
    productsContainer.textContent = "";
});
