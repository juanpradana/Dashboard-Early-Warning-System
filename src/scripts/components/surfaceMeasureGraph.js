// eslint-disable-next-line import/extensions
import Plotly from 'plotly.js/dist/plotly.min.js';

const surfaceMeasureGraph = () => {
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
      try {
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
      // eslint-disable-next-line no-empty
      } catch (error) {}
    }, 1000);
  } catch (err) {
    console.log(err);
  }
};

export default surfaceMeasureGraph;
