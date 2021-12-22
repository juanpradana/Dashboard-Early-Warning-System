import 'datatables.net-dt/css/jquery.dataTables.min.css';
import DataTable from 'datatables.net/js/jquery.dataTables.min';
import DataSource from '../data/data-source';

const dataTableDrawer = {
  async dataTableMaker(codeUnit) {
    try {
      const tableData = new DataTable('#xTable', {
        // eslint-disable-next-line quote-props
        'order': [[0, 'desc']],
      });
      setInterval(async () => {
        try {
          const datas = await DataSource.dataCenter(codeUnit);
          const dateFormat = {
            Januari: 1,
            Februari: 2,
            Maret: 3,
            April: 4,
            Mei: 5,
            Juni: 6,
            Juli: 7,
            Agustus: 8,
            September: 9,
            Oktober: 10,
            November: 11,
            Desember: 12,
          };
          const newDate = `${datas.TS} ${datas.date.split(' ')[0]}/${dateFormat[datas.date.split(' ')[1]]}/${datas.date.split(' ')[2]}`;
          tableData.row.add([
            newDate,
            datas.tinggi,
            datas.suhu,
          ]).draw(false);
        } catch (error) {
          console.log(error);
        }
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  },
};

export default dataTableDrawer;
