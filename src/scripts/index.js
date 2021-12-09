/* eslint-disable no-undef */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/navigasi-bar';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

function temperatureGraph() {
  try {
    // eslint-disable-next-line no-inner-declarations
    function rand() {
      return Math.floor(Math.random() * 501);
    }
    const time = new Date();
    const data = [{
      x: [time],
      y: [rand()],
      mode: 'lines',
      line: { color: '#80CAF6' },
      yaxis: {
        range: [0, 500],
      },
    }];
    const layout = {
      title: '<b>Suhu Perangkat</b>',
    };
    const config = { responsive: true };
    Plotly.newPlot('temperature-graph', data, layout, config);
    setInterval(() => {
      const timee = new Date();
      const update = {
        x: [[timee]],
        y: [[rand()]],
      };
      const olderTime = timee.setMinutes(timee.getMinutes() - 1);
      const futureTime = timee.setMinutes(timee.getMinutes() + 1);
      const minuteView = {
        xaxis: {
          type: 'date',
          range: [olderTime, futureTime],
        },
        yaxis: {
          range: [0, 500],
        },
      };
      Plotly.relayout('temperature-graph', minuteView);
      Plotly.extendTraces('temperature-graph', update, [0]);
    }, 1000);
  } catch (err) {
    console.log(err);
  }
}

function surfaceMeasureGraph() {
  try {
    // eslint-disable-next-line no-inner-declarations
    function rand() {
      return Math.floor(Math.random() * 501);
    }
    const time = new Date();
    const data = [{
      x: [time],
      y: [rand()],
      mode: 'lines',
      line: { color: '#80CAF6' },
      yaxis: {
        range: [0, 600],
      },
    }];
    const layout = {
      title: '<b>Ketinggian Air Laut</b>',
    };
    const config = { responsive: true };
    Plotly.newPlot('surfaceMeasure-graph', data, layout, config);
    setInterval(() => {
      const timee = new Date();
      const update = {
        x: [[timee]],
        y: [[rand()]],
      };
      const olderTime = timee.setMinutes(timee.getMinutes() - 1);
      const futureTime = timee.setMinutes(timee.getMinutes() + 1);
      const minuteView = {
        xaxis: {
          type: 'date',
          range: [olderTime, futureTime],
        },
      };
      Plotly.relayout('surfaceMeasure-graph', minuteView);
      Plotly.extendTraces('surfaceMeasure-graph', update, [0]);
    }, 1000);
  } catch (err) {
    console.log(err);
  }
}

temperatureGraph();
surfaceMeasureGraph();

window.addEventListener('load', () => {
  swRegister();
});
