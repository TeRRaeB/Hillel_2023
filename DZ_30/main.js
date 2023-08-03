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
    const popup = document.getElementById("popup");
    popup.style.display = "block";
});

const closePopupBtn = document.getElementById("closePopupBtn");
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const city = document.getElementById("city").value;
    const novaPoshta = document.getElementById("novaPoshta").value;
    const payment = document.querySelector('input[name="payment"]:checked');
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;

    const orderInfo = {
        fullName,
        city,
        novaPoshta,
        payment: payment.value,
        product,
        quantity,
        comment,
    };

    displayOrderInfo(orderInfo);
    document.getElementById("orderForm").reset();
});


function displayOrderInfo(orderInfo) {
    const orderInfoDiv = document.getElementById("orderInfo");
    orderInfoDiv.innerHTML = `
        <h2>Информация о заказе:</h2>
        <p><strong>ФИО покупателя:</strong> ${orderInfo.fullName}</p>
        <p><strong>Город:</strong> ${orderInfo.city}</p>
        <p><strong>Отделений Новой почты:</strong> ${orderInfo.novaPoshta}</p>
        <p><strong>Тип оплаты:</strong> ${orderInfo.payment}</p>
        <p><strong>Продукция:</strong> ${orderInfo.product}</p>
        <p><strong>Кол-во продукции:</strong> ${orderInfo.quantity}</p>
        <p><strong>Комментарий к заказу</strong> ${orderInfo.comment}</p>
    `;
}