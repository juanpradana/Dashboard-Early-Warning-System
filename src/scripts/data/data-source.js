import CONFIG from '../globals/config';

class DataSource {
  static async dataCenter(codeUnit) {
    const response = await fetch(`${CONFIG.BASE_URL}${codeUnit}?rt=true`);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default DataSource;
