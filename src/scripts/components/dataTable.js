// import 'datatables.net';
// import DataSource from '../data/data-source';

// const dataTableDrawer = {
//   async dataTableMaker(codeUnit) {
//     try {
//       // eslint-disable-next-line no-undef
//       const table = new DataTable('#example', {
//         // eslint-disable-next-line quote-props
//         'order': [[0, 'desc']],
//       });
//       setInterval(async () => {
//         try {
//           const datas = await DataSource.dataCenter(codeUnit);
//           table.row.add([
//             (datas.TS, datas.date),
//             datas.tinggi,
//             datas.suhu,
//           ]);
//         // eslint-disable-next-line no-empty
//         } catch (error) {}
//       }, 1000);
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };

// export default dataTableDrawer;
