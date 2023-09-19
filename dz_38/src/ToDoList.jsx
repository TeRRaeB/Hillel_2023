import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    const newTodo = { text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Введите задачу"
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{ listStyle: 'none',
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <h2>Все задачи:</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ listStyle: 'none'}}>
              {todo.text} - {todo.completed ? 'Завершено' : 'Не завершено'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
