import Popover from '../popover';

describe('Popover class functionality', () => {
  let button;
  let popoverInstance; // eslint-disable-line no-unused-vars

  beforeEach(() => {
    document.body.innerHTML = `
            <button class="btn">Toggle Popover</button>
        `;
    button = document.querySelector('.btn');
    popoverInstance = new Popover();
  });

  test('Popover should be created and displayed when the button is clicked', () => {
    button.click();

    setTimeout(() => {
      const popover = document.querySelector('.popover');
      expect(popover).not.toBeNull();
      expect(popover.style.display).toBe('block');
    }, 0);
  });

  test('Popover should be removed when the button is clicked again', () => {
    button.click();
    button.click();
    const popover = document.querySelector('.popover');
    expect(popover).toBeNull();
  });
});
