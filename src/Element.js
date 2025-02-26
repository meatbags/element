/** Element */

const Element = props => {
  if (props instanceof HTMLElement || props === null) {
    return props;
  }

  // create element
  const e = document.createElement(props.type || props.nodeType || 'div');

  // build
  for (const key in props) {
    const value = props[key];
    switch (key) {
      case 'class':
        value.split(' ').forEach(c => e.classList.add(c));
        break;
      case 'eventListener':
      case 'addEventListener':
        for (const k in value)
          e.addEventListener(k, value[k]);
        break;
      case 'children':
      case 'childNodes':
        if (Array.isArray(value))
          value.forEach(child => {
            const c = Element(child);
            if (c)
              e.appendChild(c);
          });
        else {
          const c = Element(value);
          if (c)
            e.appendChild(c);
        } break;
      case 'attribute':
      case 'attributes':
      case 'setAttribute':
        for (const k in value)
          e.setAttribute(k, value[k]);
        break;
      case 'data':
      case 'dataset':
        for (const k in value)
          e.dataset[k] = value[k];
        break;
      case 'style':
        for (const k in value)
          e.style[k] = value[k];
      case 'type':
      case 'nodeType':
        break;
      default:
        e[key] = value;
    }
  }

  return e;
};

export { Element };
