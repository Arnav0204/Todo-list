const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addTask(){
    if(inputbox.value===''){
        alert('you must enter a task efore adding');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li); 
    }
    inputbox.value = '';
}