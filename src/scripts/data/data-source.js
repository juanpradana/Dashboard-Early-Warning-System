import CONFIG from '../globals/config';

class DataSource {
  static async ChartData(codeUnit) {
    const response = await fetch(`${CONFIG.BASE_URL}${codeUnit}`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default DataSource;
