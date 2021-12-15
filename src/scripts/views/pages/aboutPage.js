const AboutPage = {
  async render() {
    return `
      <div class="aboutContent"></div>
    `;
  },

  async afterRender() {
    try {
      const postsContainer = document.querySelector('.aboutContent');
      postsContainer.innerHTML = `
        <h1> Test About </h1>
      `;
    } catch (err) {
      const postsContainer = document.querySelector('.aboutContent');
      postsContainer.innerHTML = `${err}, swipe up to refresh!</h3></div>`;
      console.log(err);
    }
  },
};

export default AboutPage;
