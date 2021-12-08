const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    this._variationButton(drawer);
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _variationButton(drawer) {
    const hamburgerButton = document.querySelector('#hamburgerButton span');
    if (drawer.classList.contains('open')) {
      hamburgerButton.classList.toggle('fa-angle-double-left');
      hamburgerButton.classList.remove('fa-angle-double-right');
    } else {
      hamburgerButton.classList.toggle('fa-angle-double-right');
      hamburgerButton.classList.remove('fa-angle-double-left');
    }
  },
};

export default DrawerInitiator;
