const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];


document.getElementById('add-btn')
.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.getElementById('new-task');
    const text = input.value;

    text ? addTodo(text) : alert("Please Enter A Todo Item :-)")

    input.value = '';
});

function addListItem(todoItem) {
 
   
    const newLI = document.createElement('li');
    const taskList = document.getElementById('list');
    const completeButton = createCompleteButton(newLI);

    newLI.textContent = todoItem.text;   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.setAttribute('id', 'dlt-btn');

    newLI.appendChild(deleteButton);
    newLI.appendChild(completeButton);
    taskList.appendChild(newLI);
    
    newLI.setAttribute('id', 'list-item');

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        deleteRow(deleteButton, todoItem)
    })
 }

function addTodo(text) {
    const todoItem =  {
        id: Math.random(),
        text: text
    };
addListItem(todoItem)
todoArray.push(todoItem);
pushToLocalStorage(todoItem)
console.log('todoArray: ', todoArray);
}

function createCompleteButton(newLI) {
    
    const completeButton = document.createElement('button');
    completeButton.textContent = "O";
    completeButton.setAttribute('id', 'complete-btn');

    completeButton.addEventListener('click', (event) => {
        event.preventDefault()
        newLI.classList.toggle('lineThrough');
        
    })
    return completeButton;
 }

 function deleteRow(deleteButton, todoItem) {
     deleteButton.parentElement.remove();
     for (let i = 0; i < todoArray.length; i++){
         if (todoArray[i].id === todoItem.id ) {
             todoArray.splice(i, 1);
             localStorage.setItem('todoArray', JSON.stringify(todoArray));
         }
     }
 }

 function pushToLocalStorage(todoItem) {
     localStorage.setItem('todoArray', JSON.stringify(todoArray));
 }

 window.addEventListener('load', (e) => {
     e.preventDefault();
     todoArray.forEach(todo => {
         addListItem(todo);
     })
 })