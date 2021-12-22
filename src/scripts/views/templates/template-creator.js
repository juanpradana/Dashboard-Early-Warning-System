import Temperature from '../../components/temperatureGraph';
import SurfaceMeasure from '../../components/surfaceMeasureGraph';
import dataTableDrawer from '../../components/dataTable';
import CONFIG from '../../globals/config';

const createDashboardContentTemplate = (_codeUnit) => {
  const contentContainer = document.querySelector('.content_grid');
  contentContainer.innerHTML = `
    <div id="temperature-graph" class="grafik card"></div>
    <div id="surfaceMeasure-graph" class="grafik card"></div>
    <div class="cardTest">
      <table id="xTable" class="display" style="width:100%">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Ketinggian Air (Cm)</th>
            <th>Suhu Perangkat (°C)</th>
          </tr>
        </thead>
        <tfoot>
          <th>Timestamp</th>
          <th>Ketinggian Air (Cm)</th>
          <th>Suhu Perangkat (°C)</th>
        </tfoot>
      </table>
    </div>
    <div id="location" class="grafik card">
      <h1>Lokasi PUMMA</h1>
      <iframe src="${CONFIG.LOCATION[_codeUnit]}" loading="lazy"></iframe>
    </div>
  `;
};

// eslint-disable-next-line no-unused-vars
const createDashboardTemplate = (_codeUnit) => {
  const dashboardContainer = document.querySelector('.dashboard');
  dashboardContainer.innerHTML = `
    <div id="picture" class="picture ">
      <a href="${CONFIG.UNIT_CODE[_codeUnit]}" target="_blank"> 
        <img src="${CONFIG.UNIT_CODE[_codeUnit]}" alt="pumma lampung 001" width="100%" height="100%"> 
      </a>
    </div>
    <div class="content_grid"></div>
  `;
  createDashboardContentTemplate(_codeUnit);
  Temperature.temperatureGraph(_codeUnit);
  SurfaceMeasure.surfaceMeasureGraph(_codeUnit);
  dataTableDrawer.dataTableMaker(_codeUnit);
};
const createHomepageTemplate = () => {
  const homePageContainer = document.querySelector('.homeContent');
  homePageContainer.innerHTML = `
  <main>
  <div class="Device-list"><h2>Device List</h2></div> 
  <div class="Device-grid-name">
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
       <div class="Device-name">Lampung 01</div>
   </div>
</main>
`;
};
const createAboutUsTemplate = () => {
  const aboutUsContainer = document.querySelector('.aboutContent');
  aboutUsContainer.innerHTML = `
  <main class="mainAbout-us">
  <h1>About us</h1>
  <div class="about-grid">
      <div class="about-description">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea id, quod sit, est vel, nobis atque ducimus dolore reprehenderit temporibus enim. Et, harum obcaecati nobis consequatur culpa suscipit ducimus blanditiis?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe maxime nulla facere explicabo obcaecati, asperiores quas blanditiis ipsum non accusantium, dolorem magnam vitae. Impedit, esse! Ut neque iusto distinctio.</p>
      </div>
      <div class="about-picture-container">
          <img class="about-picture"  src="../public/img/icon project capstone1.png" alt="">
      </div> 
  </div>
  
  </main>
  <div class="Fitur-brand-text">
  <h1>Selalu Cek Informasi Tentang</h1>
  <h1>Permukaan Air Laur</h1>
  </div>
  <div class="Device-grid-fitur">
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/src/public/img/icon project capstone.png" alt=""> 
      </div>
      <h1>Grafik Suhu Radar</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora doloribus aspernatur minus, ut repudiandae nam maiores eum provident ea alias magnam? Magnam libero illum fugiat! Molestias repellat minima ipsum.</p>
      
  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/src/public/img/icon project capstone.png" alt="">
      </div>
      <h1>Grafik Ketinggian air laut</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora doloribus aspernatur minus, ut repudiandae nam maiores eum provident ea alias magnam? Magnam libero illum fugiat! Molestias repellat minima ipsum.</p>
  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/src/public/img/icon project capstone1.png" alt="">
      </div>
      <h1>Tabel Suhu radar dan ketinggian air</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora doloribus aspernatur minus, ut repudiandae nam maiores eum provident ea alias magnam? Magnam libero illum fugiat! Molestias repellat minima ipsum.</p>

  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/src/public/img/icon project capstone2.png" alt="">
      </div>
      <h1>Foto Sekitar Radar</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora doloribus aspernatur minus, ut repudiandae nam maiores eum provident ea alias magnam? Magnam libero illum fugiat! Molestias repellat minima ipsum.</p>
  </div>
  </div>`;
};

export { createDashboardTemplate, createHomepageTemplate, createAboutUsTemplate };
