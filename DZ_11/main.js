const arr = ['FORD', 'Tesla', 5, '6', 'NISSAN', 'Test'];

let deleteItem = prompt(`Введите что удалить, который нужно удалить из массива: ${arr}`, 'еда');
let newArr = removeElementsArray(arr, deleteItem);

function removeElementsArray(arr, removeItem) {
    return arr.filter(function (value) {
        if (typeof value === 'string' && typeof removeItem === 'string') {
            return value.toLowerCase() !== removeItem.toLowerCase();
        } else {
            return value !== removeItem;
        }
    })
}

document.write(`<p> ${newArr}</p>`);