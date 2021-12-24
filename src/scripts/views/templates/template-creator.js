/* eslint-disable no-irregular-whitespace */
import Temperature from '../../components/temperatureGraph';
import SurfaceMeasure from '../../components/surfaceMeasureGraph';
import dataTableDrawer from '../../components/dataTable';
import CONFIG from '../../globals/config';

const createDashboardContentTemplate = (_codeUnit) => {
  const contentContainer = document.querySelector('.content_grid');
  contentContainer.innerHTML = `
    <div id="temperature-graph" class="grafik card"></div>
    <div id="surfaceMeasure-graph" class="grafik card"></div>
    <div class="Table card">
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
      <iframe src="${CONFIG.UNIT_CODED[_codeUnit].location}" loading="lazy"></iframe>
    </div>
  `;
};

// eslint-disable-next-line no-unused-vars
const createDashboardTemplate = (_codeUnit) => {
  const dashboardContainer = document.querySelector('.dashboard');
  dashboardContainer.innerHTML = `
    <div id="picture" class="picture ">
      <a href="${CONFIG.UNIT_CODED[_codeUnit].img}" target="_blank"> 
        <img src="${CONFIG.UNIT_CODED[_codeUnit].img}" alt="pumma lampung 001" width="100%" height="100%"> 
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
    <div class="Device-grid-name"></div>
  </main>`;
  const deviceContainer = document.querySelector('.Device-grid-name');
  Object.keys(CONFIG.UNIT_CODED).forEach((key) => {
    deviceContainer.innerHTML += `
    <a href="#/dashboard/${key}">
      <div class="Device-name">
        <div class="Device-icon-text">
        <img src="/images/icon-device.png" alt="gambar ${key}">
        <h2>${key}</h2>
        </div>
      </div>
    </a>`;
  });
};
const createAboutUsTemplate = () => {
  const aboutUsContainer = document.querySelector('.aboutContent');
  aboutUsContainer.innerHTML = `
  <main class="mainAbout-us">
  <h1>About us</h1>
  <div class="about-grid">
      <div class="about-description">
          <p>PUMMA merupakan suatu sistem peringatan dini tsunami yang terdiri dari beberapa subsistem yaitu sensor, sistem mikrokomputer, transmisi data, catu daya, dan subsistem pengolahan data/informasi (*datacenter*).

          Konstruksi PUMMA terbuat dari *stainless-steel* atau bahan galvanis antikarat, karena akan ditempatkan di tengah laut dan pantai. Struktur utama PUMMA berupa tiang yang dipasang *box* berisi sensor *tide-gauge* ultrasonik berbasis mikrokomputer yang berfungsi untuk mengukur ketinggian muka air laut.</p>
          
          <p>Mikrokomputer berfungsi untuk mengatur interval waktu akuisisi data di sensor (setiap 1 detik), kemudian mengkonversi data ketinggian muka air laut dan *captured image* dari kamera lalu mengirimkan data tersebut ke subsistem penyimpanan dan pengolahan data yang berada di *cloud-server* menggunakan radio transmisi gelombang mikro.</p>
          
          <p>Selanjutnya data hasil pengolahan di *platform* datacenter akan menampilkan informasi ketinggian gelombang laut dalam bentuk tabel dan grafik sehingga kondisi ketinggian muka air laut dapat dipantau setiap saat.
          
          PUMMA juga dilengkapi dengan kamera CCTV yang dapat menangkap tinggi muka air laut dan mengirim gambar setiap dua menit sekali ke server. Selain dapat diakses langsung melalui *website*, data dan informasi dari U-TEWS akan ditampilkan pada papan informasi elektronik (*electronic information board*) yang ditempatkan di masjid/musala di desa/dusun sepanjang pesisir Lampung.</p>
      </div>
      <div class="about-picture-container">
          <img class="about-picture"  src="/images/icon-aboutus.png" alt="">
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
          <img src="/images/icon_project_capstone.png" alt=""> 
      </div>
      <h1>Grafik Suhu Perangkat</h1>
      <p>Grafik suhu perangkat akan memberikan data realtime tentang berapa suhu pada perangkat, data ini akan terus di update setiap satu detik. Data ini sangat penting untuk memantau perangkat dan sebagai indikator perangkat masih dalam keadaan baik atau perlu pemeliharaan.</p>
      
  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/images/icon_project_capstone.png" alt="">
      </div>
      <h1>Grafik Ketinggian air laut</h1>
      <p>grafik ketinggian air laut memberikan data realtime tentang berapa ketinggian air laut, data ini akan terus diupdate setiap satu detik. informasi dari grafik ini merupakan fokus utama, karena jika permukaan air laut mengalami kenaikan atau penurunan yang sangat derastis itu menjadi pertanda yang harus diwaspadai.</p>
  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/images/icon_project_capstone1.png" alt="">
      </div>
      <h1>Tabel Suhu perangkat dan ketinggian air</h1>
      <p>Table suhu perangkat dan ketinggian air adalah alternatif dari grafik ketinggian air dan suhu perangkat,pada table ini menampikan data realtime dari ketinggian air laut dan suhu perangkat, table ini berguna untuk melihat data secara rapih dan terstruktur.</p>

  </div>
  <div class="Device-fitur">
      <div class="container-icon">
          <img src="/images/icon_project_capstone3.png" alt="">
      </div>
      <h1>Foto Sekitar Perangkat</h1>
      <p>Location adalah informasi lokasi dari perangkat berada, ketika diakses maka akan memberikan peta lokasi dimana perangkat berada.</p>
  </div>
  </div>`;
};

export { createDashboardTemplate, createHomepageTemplate, createAboutUsTemplate };
