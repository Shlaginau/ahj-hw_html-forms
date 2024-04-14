export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(title, content, element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    popoverElement.style.display = 'block';

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');

    const popoverHeader = document.createElement('h3');
    popoverHeader.classList.add('popover-header');
    popoverHeader.textContent = title;

    const popoverBody = document.createElement('div');
    popoverBody.classList.add('popover-body');
    if (typeof content === 'string') {
      popoverBody.textContent = content;
    } else {
      popoverBody.appendChild(content);
    }

    popoverElement.appendChild(arrow);
    popoverElement.appendChild(popoverHeader);
    popoverElement.appendChild(popoverBody);

    document.body.appendChild(popoverElement);

    const { left, top } = element.getBoundingClientRect();
    popoverElement.style.position = 'absolute';
    popoverElement.style.left = `${left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 5}px`;
    arrow.style.left = `${popoverElement.offsetWidth / 2 - arrow.offsetWidth / 2}px`;

    const id = performance.now();
    this._popovers.push({ id, element: popoverElement });

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((t) => t.id === id);
    if (popover) {
      popover.element.remove();
      this._popovers = this._popovers.filter((t) => t.id !== id);
    }
  }
}
