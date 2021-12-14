class navigasiBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="head-bar">
        <div class="app-bar">
          <div class="app-bar__menu">
            <button aria-label="menu button" id="hamburgerButton" type="button">
              <span class="fas fa-angle-double-right"></span>
            </button>
          </div>
          <div class="app-bar__navMenu">
            <ul>
              <li><a href="#/home">Home</a></li>
              <li><a href="#/about">About Us</a></li>
            </ul>
          </div>
          <div id="navigationDrawer" class="app-bar__location">
            <h1>Pilih Lokasi</h1>
            <ul>
              <li><a href="#/dashboard/lampung01">Lampung01</a></li>
              <li><a href="#/dashboard/lampung02">Lampung02</a></li>
            </ul>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define('navigasi-bar', navigasiBar);
