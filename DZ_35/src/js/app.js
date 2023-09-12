const data = {
    "Алкоголь": [
        {
            name: "Виски",
            price: 50,
            description: "Шотландский виски изготавливают из воды, солода, ячменя и других зерновых культур. Крепость алкоголя составляет не менее 40%. "
        },
        {
            name: "Джин",
            price: 40,
            description: "Изготавливается путём перегонки зернового спирта с добавлением растительных пряностей, обычно это можжевёловая ягода, кориандр, корень дудника (ангелика), корень ириса, миндаль и другие, которые придают джину его характерный вкус."
        },
        {
            name: "Ром",
            price: 35,
            description: "крепкий спиртной напиток, изготавливаемый путём сбраживания и перегонки побочных продуктов сахарно-тростникового производства, таких как патока и тростниковый сироп"
        },
        {
            name: "Текила",
            price: 32,
            description: "крепкий алкогольный напиток, приготовленный путем сбраживания и дальнейшей перегонки сока голубой агавы"
        }
    ],
    "Море продукты": [
        {
            name: 'Креветка ',
            price: 10,
            description: 'небольшой морской рачок Pandalus borealis, обитающий практически во всех морях мира'
        },
        {
            name: 'Кальмар',
            price: 20,
            description: 'У свежих кальмаров белое гладкое мясо, а кожица розовая или фиолетовая, требующая тщательного удаления.'
        },
        {
            name: 'Лосось',
            price: 30,
            description: 'Лосось считается жирной рыбой. Лососи делятся на две большие группы: атлантический (семга, кунжа) и тихоокеанский (дальневосточный).'
        }

    ],
    "Сигареты": [
        {
            name: 'Marlboro ',
            price: 9,
            description: 'марка сигарет, выпускаемая компанией Philip Morris International с 1924 года. '
        },
        {
            name: 'Camel',
            price: 7,
            description: 'международный бренд сигарет, который был впервые представлен на рынке американской компанией «R.J. Reynolds Tobacco» летом 1913 года. '
        },
        {
            name: 'Parliament',
            price: 10,
            description: 'популярные сигареты элитного сегмента. Изделия бренда привлекают курильщиков ярким табачным вкусом, сбалансированным уровнем крепости.'
        },
        {
            name: 'Lucky Strike',
            price: 6,
            description: ' мaрка американских сигарет. Под данной маркой сначала выпускался жевательный табак.'
        }
    ],
    "Выпечка": [
        {
            name: 'Торт',
            price: 45,
            description: 'кондитерское изделие, состоящее из нескольких коржей, пропитанных кремом или джемом. Сверху торт обычно украшают кремом, глазурью или фруктами.'
        },
        {
            name: 'Булочка',
            price: 3,
            description: 'Булочки обычно пекут из сдобного дрожжевого теста и чаще всего круглой формы. В булочке может быть сладкая начинка или изюм, иногда их посыпают маком, корицей или кунжутом. '
        }
    ],
}
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
