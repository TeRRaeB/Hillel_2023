const table = document.getElementById('table');
const divForm = document.getElementById('form-container');
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('formData');
    let saveData = {};
    let lang = [];
    form.addEventListener('submit', function(event){
        const formData = new FormData(form);
        const formEntries = formData.entries();
        for( const [key, value] of formEntries){
            if(key === 'lang'){
                lang.push(value);
            }else{
            saveData[key] = value;
            }
        }
        saveData.lang = lang;
        console.log(saveData); 
        table.style.display = 'block';
        for(let key in saveData){
            const value = saveData[key];
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = key;
            tr.appendChild(th);
            const th2 = document.createElement('th');
            th2.textContent = value;
            tr.appendChild(th2);
            table.appendChild(tr);
        }
        divForm.style.display = 'none';
        event.preventDefault();
    })
})