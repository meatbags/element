/** Element */

const Element = prop => {
  if (prop instanceof HTMLElement || prop === null) {
    return prop;
  }

  const e = document.createElement(prop.type || 'div');

  for (const key in prop) {
    const value = prop[key];
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
      case 'dataset':
        for (const k in value)
          e.dataset[k] = value[k];
        break;
      case 'style':
        for (const k in value)
          e.style[k] = value[k];
      case 'type':
        break;
      default:
        e[key] = value;
    }
  }

  return e;
};

export default Element;
