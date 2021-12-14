import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { createDashboardTemplate } from '../templates/template-creator';

const DashboardPage = {
  async render() {
    return `
        <div class="dashboard"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { codeUnit } = url;
    try {
      const data = await DataSource.dataCenter(codeUnit);
      createDashboardTemplate(codeUnit, data);
    } catch (err) {
      const dashboardContainer = document.querySelector('#dashboard');
      dashboardContainer.innerHTML = `<h3>Error: ${err}, swipe up to refresh!</h3>`;
    }
  },
};

export default DashboardPage;
