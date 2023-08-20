const categoriesContainer = document.getElementById("categories");
const productsContainer = document.getElementById("products");
const productInfoContainer = document.getElementById("product-info");
const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");
const buyButton = document.getElementById("buy-button");
let selectProduct;
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
        selectProduct = product;
      });
      productsContainer.appendChild(productItem);
    });
  });
  categoriesContainer.querySelector("ul").appendChild(categoryItem);
}
const popup = document.getElementById("popup");
buyButton.addEventListener("click", function () {
  popup.style.display = "block";
});

const closePopupBtn = document.getElementById("closePopupBtn");
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(this);
  const objData = Object.fromEntries(formData);
  
  const {fullName,city,novaPoshta,payment,quantity,comment} = objData;

  if (!fullName || !city || !novaPoshta || !payment || !quantity) {
    showError("Заполните все поля.");
    return;
  }
  if (!isFullNameValid(fullName)) {
    showError("Введите корректно ФИО (буквы и пробелы)");
    return;
  }
  if (!isNovaPoshtaValid(novaPoshta)) {
    showError("Введите корректно № отделение Новой Почты (только цифры)");
    return;
  }
  if (!isQuantityValid(quantity)) {
    showError("Введите корректное количество товара (только цифры)");
    return;
  }

  let orderInfo = {
    fio: fullName,
    city: city,
    poshta: novaPoshta,
    payment: payment,
    product: selectProduct.name,
    quantity: quantity,
    comment: comment,
  };
  displayOrderInfo(orderInfo);
  document.getElementById("orderForm").reset();
  popup.style.display = "none";
});

function displayOrderInfo(orderInfo) {
  const orderInfoDiv = document.getElementById("orderInfo");
  orderInfoDiv.style.display = "block";
  orderInfoDiv.innerHTML = `
        <h2>Информация о заказе:</h2>
        <p><strong>ФИО покупателя:</strong> ${orderInfo.fio}</p>
        <p><strong>Город:</strong> ${orderInfo.city}</p>
        <p><strong>Отделений Новой почты:</strong> ${orderInfo.poshta}</p>
        <p><strong>Тип оплаты:</strong> ${orderInfo.payment}</p>
        <p><strong>Продукция:</strong> ${orderInfo.product}</p>
        <p><strong>Кол-во продукции:</strong> ${orderInfo.quantity}</p>
        <p><strong>Комментарий к заказу</strong> ${orderInfo.comment}</p>
        
  <button id="closePopupBtnOrder">Закрити</button>
    `;
  document
    .getElementById("closePopupBtnOrder")
    .addEventListener("click", function () {
      const orderInfoDiv = document.getElementById("orderInfo");
      orderInfoDiv.style.display = "none";
    });
  alert("Спасибо за заказ.");
  productInfoContainer.style.display = "none";
  productName.textContent = "";
  productDescription.textContent = "";
  productsContainer.textContent = "";
}

function showError(message) {
  const errorElement = document.createElement("div");
  errorElement.className = "error";
  errorElement.textContent = message;

  const form = document.getElementById("orderForm");
  form.appendChild(errorElement);

  setTimeout(() => {
    form.removeChild(errorElement);
  }, 3000);
}

function isFullNameValid(fullName) {
  const fullNamePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
  return fullNamePattern.test(fullName);
}

function isNovaPoshtaValid(novaPoshta) {
  const novaPoshtaPattern = /^[0-9]+$/;
  return novaPoshtaPattern.test(novaPoshta);
}

function isQuantityValid(quantity) {
  const quantityPattern = /^[0-9]+$/;
  return quantityPattern.test(quantity);
}
