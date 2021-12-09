import CONFIG from '../globals/config';

class DataSource {
  static async DataCenter(codeUnit) {
    const response = await fetch(`${CONFIG.BASE_URL}${codeUnit}`);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default DataSource;
