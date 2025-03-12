# @meatbags/element

A micro view library for building complex interfaces. Create nested, functional DOM elements from a single JSON input. Supports all DOM methods and properties.

Installation:
```
npm install @meatbags/element
```

Example usage:
```javascript
document.body.appendChild(Element({
  class: 'container',
  children: [{
    id: 'my-button',
    style: {
      cursor: 'pointer',
    },
    innerText: 'Greet',
    addEventListener: {
      click: () => alert('Hello, world!'),
    },
  }],
}));
```
