// eslint-disable-next-line import/extensions
import Plotly from 'plotly.js/dist/plotly.min.js';
import DataSource from '../data/data-source';

const SurfaceMeasure = {
  async surfaceMeasureGraph(codeUnit) {
    try {
      const datas = await DataSource.dataCenter(codeUnit);
      const waktu = new Date();
      waktu.setHours(datas.TS.split(':')[0]);
      waktu.setMinutes(datas.TS.split(':')[1]);
      waktu.setSeconds(datas.TS.split(':')[2]);
      const data = [{
        x: [waktu],
        y: [datas.tinggi],
        mode: 'lines',
        line: { color: '#80CAF6' },
      }];
      const layout = {
        title: '<b>Ketinggian Air Laut</b>',
        yaxis: {
          title: 'Ketinggian (Cm)',
          range: [0, 600],
        },
      };
      const config = { responsive: true };
      Plotly.newPlot('surfaceMeasure-graph', data, layout, config);
      let tempTime;
      setInterval(async () => {
        try {
          const datass = await DataSource.dataCenter(codeUnit);
          const waktuu = new Date();
          const timeUpdate = new Date();
          waktuu.setHours(datass.TS.split(':')[0]);
          waktuu.setMinutes(datass.TS.split(':')[1]);
          waktuu.setSeconds(datass.TS.split(':')[2]);
          if (tempTime === undefined || tempTime < waktuu) {
            const update = {
              x: [[waktuu]],
              y: [[datass.tinggi]],
            };
            const olderTime = timeUpdate.setMinutes(timeUpdate.getMinutes() - 1);
            const futureTime = timeUpdate.setMinutes(timeUpdate.getMinutes() + 1);
            const minuteView = {
              xaxis: {
                type: 'date',
                range: [olderTime, futureTime],
              },
            };
            Plotly.relayout('surfaceMeasure-graph', minuteView);
            Plotly.extendTraces('surfaceMeasure-graph', update, [0]);
          }
        // eslint-disable-next-line no-empty
        } catch (error) {}
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  },
};

export default SurfaceMeasure;
