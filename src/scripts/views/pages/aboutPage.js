import { createAboutUsTemplate } from '../templates/template-creator';

const AboutPage = {
  async render() {
    return `
      <div class="aboutContent"></div>
    `;
  },

  async afterRender() {
    try {
      createAboutUsTemplate();
    } catch (err) {
      const postsContainer = document.querySelector('.aboutContent');
      postsContainer.innerHTML = `${err}, swipe up to refresh!</h3></div>`;
      console.log(err);
    }
  },
};

export default AboutPage;
