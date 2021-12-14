const HomePage = {
  async render() {
    return `
      <div class="homeContent"></div>
    `;
  },

  async afterRender() {
    try {
      const postsContainer = document.querySelector('.homeContent');
      postsContainer.innerHTML = `
        <h1> Test Home </h1>
      `;
    } catch (err) {
      const postsContainer = document.querySelector('.homeContent');
      postsContainer.innerHTML = `${err}, swipe up to refresh!</h3></div>`;
      console.log(err);
    }
  },
};

export default HomePage;
