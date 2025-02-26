/** A simple, unstyled todo list */

import { Element } from '@meatbags/element';

// addTodo callback
let addTodo = label => {
  // create todo list item
  let todo = Element({
    type: 'li',
    class: 'todo',
    children: [{
      type: 'span',
      innerText: label,
    }, {
      type: 'button',
      innerHTML: 'Remove &times;',
      addEventListener: {
        click: () => todo.remove(),
      }
    }]
  });

  // add to list
  document.querySelector('#todo-list').appendChild(todo);
};

// todo list and input UI
let todoList = Element({
  children: [{
    children: [{
      type: 'input',
      attributes: {
        id: 'todo-input',
        type: 'text',
      }
    }, {
      type: 'button',
      innerText: 'Add Todo',
      addEventListener: {
        click: () => {
          let input = document.querySelector('#todo-input');
          if (input.value) {
            addTodo(input.value);
            input.value = '';
          }
        }
      }
    }],
  }, {
    type: 'ul',
    id: 'todo-list',
  }]
});

document.body.appendChild(todoList);
