import Temperature from '../../components/temperatureGraph';
import SurfaceMeasure from '../../components/surfaceMeasureGraph';

const createDashboardContentTemplate = () => {
  const contentContainer = document.querySelector('.content_grid');
  contentContainer.innerHTML = `
    <div id="temperature-graph" class="grafik card"></div>
    <div id="surfaceMeasure-graph" class="grafik card"></div>
    <div id="water_level" class="grafik card">
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
    <div id="location" class="grafik card">
      <h1>Lokasi PUMMA</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.712237637262!2d105.1701593147662!3d-5.609450995933398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNcKwMzYnMzQuMCJTIDEwNcKwMTAnMjAuNSJF!5e0!3m2!1sen!2sid!4v1639065434949!5m2!1sen!2sid" width="100%" height="85%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  `;
};

// eslint-disable-next-line no-unused-vars
const createDashboardTemplate = (_codeUnit) => {
  const dashboardContainer = document.querySelector('.dashboard');
  dashboardContainer.innerHTML = `
    <div id="picture" class="picture ">
      <a href="https://www.dropbox.com/s/iv9xlzkdfqx2zj5/camerapumma.jpg?raw=1" target="_blank"> 
        <img src="https://www.dropbox.com/s/iv9xlzkdfqx2zj5/camerapumma.jpg?raw=1" alt="pumma lampung 001" width="100%" height="100%"> 
      </a>
    </div>
    <div class="content_grid"></div>
  `;
  createDashboardContentTemplate();
  Temperature.temperatureGraph(_codeUnit);
  SurfaceMeasure.surfaceMeasureGraph(_codeUnit);
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
<div class="Fitur-brand-text">
   <h1>Selalu Cek Informasi Tentang</h1>
   <h1>Permukaan Air Laur</h1>
</div>
<div class="Device-grid-fitur">
   <div class="Device-fitur-1">
       <div class="container-icon-1">
           <img src="../global/img/icon project capstone.png" alt=""> 
       </div>
       <p>Grafik Suhu Radar</p>
   </div>
   <div class="Device-fitur-2">
       <div class="container-icon-2">
           <img src="../global/img/icon project capstone.png" alt="">
       </div>
       <p>Grafik Ketinggian air laut</p>
   </div>
   <div class="Device-fitur-1">
       <div class="container-icon-1">
           <img src="../global/img/icon project capstone1.png" alt="">
       </div>
       <p>Tabel Suhu radar dan</p>
       <p> ketinggian air</p>
   </div>
   <div class="Device-fitur-2">
       <div class="container-icon-2">
           <img src="../global/img/icon project capstone2.png" alt="">
       </div>
       <p>Foto Sekitar Radar</p>
   </div>
</div>`;
};

export { createDashboardTemplate, createHomepageTemplate };
