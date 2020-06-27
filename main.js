const todos = document.querySelector('.todo-list');
const price = document.querySelector('.price-tag');
const itemAdd = document.querySelector('.todo-input');
const addItemBtn = document.querySelector('.todo-btn');


addItemBtn.addEventListener('click', addNewItem);
todos.addEventListener('click', deleteCheck);


function addNewItem(e) {


	e.preventDefault();


if (itemAdd.value == '') {
	itemAdd.placeholder = `Add an item to the list`;
	return false;

	}

	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	 newTodo.innerText = itemAdd.value;

	 newTodo.classList.add('todo-item');

	 const editBtn = document.createElement('button');
	 editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
	 editBtn.classList.add('edit-btn');


	 const completedBtn = document.createElement('button');
	 completedBtn.innerHTML = '<i class="fa fa-check"></i>';
	 completedBtn.classList.add('complete-btn');

	 const trashBtn = document.createElement('button');
	 trashBtn.innerHTML = '<i class="fa fa-trash-o"></i>';
	 trashBtn.classList.add('trash-o-btn');

	 const itemAmount = document.createElement('span');
	 itemAmount.innerText = price.value;
	 itemAmount.classList.add('price'); 

	 todoDiv.appendChild(newTodo);
	 todoDiv.appendChild(itemAmount);
	 todoDiv.appendChild(editBtn);
	 todoDiv.appendChild(completedBtn);
	 todoDiv.appendChild(trashBtn);


	 itemAdd.value = '';
	 itemAdd.placeholder = 'Enter a new item';

	 todos.appendChild(todoDiv);


}

function deleteCheck(e) {

	const item = e.target;

	if (item.classList[0] === 'trash-o-btn') {
		// e.target.parentElement.remove();


		const todo = item.parentElement;
		todo.classList.add('fall');

		todo.addEventListener('transitionend', function () {
			todo.remove();
		});

	}
	else if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.children[0].classList.toggle('completed');
		console.log(item);

	}
	
	else if (item.classList[0] === 'edit-btn') {
		const todo = item.parentElement;
		editedInput = prompt('Edit this item..');
		todo.children[0].innerText = editedInput;
		console.log(todo);
		return;
  }


}