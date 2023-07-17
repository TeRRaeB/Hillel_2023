let string;
let element;

do {
    string = prompt('Введите строку');
} while (string === null)
element = prompt(`введите символы для удаления`);

function deletedElement(str, element) {
    let newString = '';
    const lowerStr = str.toLowerCase();
    const lowerElement = element.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (!lowerElement.includes(lowerStr[i])) {
            newString += str[i];
        }
    }

    return newString;
}

console.log(deletedElement(string, element));