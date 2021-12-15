import { createHomepageTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="homeContent"></div>
    `;
  },

  async afterRender() {
    try {
      createHomepageTemplate();
    } catch (err) {
      const postsContainer = document.querySelector('.homeContent');
      postsContainer.innerHTML = `${err}, swipe up to refresh!</h3></div>`;
      console.log(err);
    }
  },
};

export default HomePage;
