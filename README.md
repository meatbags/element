# @meatbags/element

A micro-library for creating bespoke DOM elements from Javascript objects. Works 1:1 with DOM features. This library is a barebones replacement for View (as in the View in MVC) libraries, covering common use-cases. DOM knowledge required.

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
