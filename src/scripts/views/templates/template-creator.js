import temperatureGraph from '../../components/temperatureGraph';
import surfaceMeasureGraph from '../../components/surfaceMeasureGraph';

const createDashboardContentTemplate = () => {
  const contentContainer = document.querySelector('.content_grid');
  contentContainer.innerHTML = `
    <div id="temperature-graph" class="posts card"></div>
    <div id="surfaceMeasure-graph" class="posts card"></div>
    <div id="water_level" class="posts card">
      <div class="table_tab">
        <div class="table_title">
          <h2>Ketinggian Air dan Suhu Perangkat</h2>
        </div>
        <table>
          <tr>
            <th>timestamp</th>
            <th>ketinggian (Cm)</th>
            <th>suhu (Celcius)</th>
          </tr>
        </table>
      </div>
      <div class="table">
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td> 
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>
          <tr>
            <td>12</td>
            <td>3</td>
            <td>3</td>  
          </tr>               
        </table>
      </div>
    </div>
    <div id="location" class="posts card">
      <h1>Lokasi PUMMA</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.712237637262!2d105.1701593147662!3d-5.609450995933398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNcKwMzYnMzQuMCJTIDEwNcKwMTAnMjAuNSJF!5e0!3m2!1sen!2sid!4v1639065434949!5m2!1sen!2sid" width="100%" height="85%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  `;
};

// eslint-disable-next-line no-unused-vars
const createDashboardTemplate = (_codeUnit, _data) => {
  const dashboardContainer = document.querySelector('.dashboard');
  dashboardContainer.innerHTML = `
    <div id="picture" class="posts card">
      <a href="https://www.dropbox.com/s/iv9xlzkdfqx2zj5/camerapumma.jpg?raw=1" target="_blank"> 
        <img src="https://www.dropbox.com/s/iv9xlzkdfqx2zj5/camerapumma.jpg?raw=1" alt="pumma lampung 001" width="100%" height="100%"> 
      </a>
    </div>
    <div class="content_grid"></div>
  `;
  createDashboardContentTemplate();
  temperatureGraph();
  surfaceMeasureGraph();
};

// eslint-disable-next-line import/prefer-default-export
export { createDashboardTemplate };
