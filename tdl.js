function todolist() {
        const form = document.querySelector('.tdlForm'); // Use class selector
        const todoinput = document.querySelector('.tdlitem'); // Use class selector
        const addButton = document.querySelector('.tdlButton'); // Use class selector
        const todoList = document.querySelector('#todo-list');
    
        let todos = [];
    
        function addTodo() {
            const todoText = todoinput.value.trim();
    
            if (todoText.length > 0) {
                const todo = {
                    id: Date.now(),
                    text: todoText,
                    completed: false
                };
    
                todos.push(todo); // Use push instead of todo.push(todo);
    
                todoinput.value = '';
    
                renderTodos();
            }
        }
    
        function toggleCompleted(id) {
            todos = todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
    
                return todo;
            });
    
            renderTodos();
        }
    
        function deleteTodo(id) {
            todos = todos.filter(todo => todo.id !== id);
    
            renderTodos();
        }
    
        function renderTodos() {
            todoList.innerHTML = '';
    
            todos.forEach(todo => {
                const todoItem = document.createElement('li');
                const todoText = document.createElement('span');
                const todoDeleteButton = document.createElement('button');
    
                todoText.textContent = todo.text;
                todoDeleteButton.textContent = 'Delete';
    
                todoDeleteButton.addEventListener('click', () => deleteTodo(todo.id));
    
                if (todo.completed) {
                    todoItem.classList.add('completed');
                }
    
                todoItem.addEventListener('click', () => toggleCompleted(todo.id));
    
                todoItem.appendChild(todoText);
                todoItem.appendChild(todoDeleteButton);
    
                todoList.appendChild(todoItem);
            });
        }
    
        form.addEventListener('submit', event => {
            event.preventDefault();
            addTodo();
        });
    
        renderTodos();
}
    