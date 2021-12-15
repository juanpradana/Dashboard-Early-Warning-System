// eslint-disable-next-line import/extensions
import Plotly from 'plotly.js/dist/plotly.min.js';
import DataSource from '../data/data-source';

const SurfaceMeasure = {
  async surfaceMeasureGraph(codeUnit) {
    try {
      const datas = await DataSource.dataCenter(codeUnit);
      const waktu = new Date();
      waktu.setHours(datas[0].TS.split(':')[0]);
      waktu.setMinutes(datas[0].TS.split(':')[1]);
      waktu.setSeconds(datas[0].TS.split(':')[2]);
      const data = [{
        x: [waktu],
        y: [datas[0].tinggi],
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
      let tempTime;
      setInterval(async () => {
        try {
          const datass = await DataSource.dataCenter(codeUnit);
          const waktuu = new Date();
          waktuu.setHours(datass[0].TS.split(':')[0]);
          waktuu.setMinutes(datass[0].TS.split(':')[1]);
          waktuu.setSeconds(datass[0].TS.split(':')[2]);
          if (tempTime === undefined || tempTime < waktuu) {
            const update = {
              x: [[waktuu]],
              y: [[datass[0].tinggi]],
            };
            const olderTime = waktuu.setMinutes(waktuu.getMinutes() - 1);
            const futureTime = waktuu.setMinutes(waktuu.getMinutes() + 1);
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
