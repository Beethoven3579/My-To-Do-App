
const newItem = document.getElementById('add-btn').addEventListener('click', addListItem);

function addListItem(event) {
    event.preventDefault();
    const input = document.getElementById('new-task');
    // Preventing Empty List Item // "required" in (HTML) was not functioning "??"
    if (input.value == ''){
        alert("Please Enter Some Text!!!")
    }
    else {
    const taskList = document.getElementById('list');

    const newLI = document.createElement('LI');
    newLI.textContent = input.value;   
    newLI.setAttribute('id', 'list-item');

    const deleteButton = document.createElement('BUTTON');
    deleteButton.textContent = "X"
    deleteButton.setAttribute('id', 'dlt-btn');
    deleteButton.classList.add('delete');  

    const completeButton = document.createElement('BUTTON');
    completeButton.textContent = "0"
    completeButton.setAttribute('id', 'complete-btn');
  
    taskList.append(newLI);
    newLI.append(deleteButton);
    newLI.append(completeButton);
  
    input.value = '';
    console.log(newLI)
    }
 }


function deleteItem(event) {
    event.preventDefault();
    const item = document.getElementById('list-item')
    const deleteListItem = document.getElementById('dlt-btn')
    deleteListItem.addEventListener('click', function () {
        item.removeChild()
       })
    }

function lineThruText(event) {
    event.preventDefault();
}

