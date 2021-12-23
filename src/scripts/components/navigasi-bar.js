class navigasiBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="head-bar">
        <div class="app-bar">
          <div class="app-bar__menu">
            <button aria-label="menu button" id="hamburgerButton" class="hamburgerMenu" type="button">
              <span class="fas fa-angle-double-right"></span>
            </button>
          </div>
          <div id="navigationDrawer" class="app-bar__navMenu">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About Us</a></li>
            </ul>
          </div>  
        </div>
      </div>
      <div class="hero">
        <div class="hero-text">
            <h2>Perangkat Ukur Murah Muka Air Laut</h2>
            <h3>Tsunami Early Warning System</h3>
        </div>
    </div>
  `;
  }
}

customElements.define('navigasi-bar', navigasiBar);
