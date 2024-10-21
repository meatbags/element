# @meatbags/element

Create nested DOM elements from JSON.

Installation:
```
npm install @meatbags/element
```

Example usage:
```js
import { Element } from '@meatbags/element';

let myModal = Element({
  type: 'div',
  class: 'modal',
  children: {
    class: 'modal__inner',
    children: [{
      class: 'modal__text',
      innerHTML: 'Hello, world!'
    }, {
      type: 'button',
      class: 'modal__button',
      innerText: 'Close',
      addEventListener: {
        click: e => {
          myModal.remove();
        },
      },
    }]
  }
});

document.body.appendChild(myModal);
```
