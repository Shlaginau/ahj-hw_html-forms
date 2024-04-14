import Popover from './popover';

document.addEventListener('DOMContentLoaded', () => {
  const popover = new Popover();
  let popoverId = null;

  const button = document.querySelector('.btn');
  button.addEventListener('click', () => {
    if (popoverId !== null) {
      popover.removePopover(popoverId);
      popoverId = null;
    } else {
      popoverId = popover.showPopover('Popover title', "Here's some amazing content. It's very engaging. Right?", button);
    }
  });
});
