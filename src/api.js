import axios from 'axios';

/**
 * Api class with all the Api calls.
 *
 **/
export default class Api  {
  /// Base Call.
  static call () {
    return axios.create({
      baseURL: 'http://worldtimeapi.org/api',
      withCredentials: false,
      headers: Api.headers
    });
  }

  /**
   * Gets locations from api.
   * @params timezone - string
   * @return array<string>
   */
  static async locations (timezone) {
    return (await this.call().get("/timezone/" + timezone)).data;
  }

  /**
   * Gets time object from api.
   * @params locations - string
   * @return Obj
   */
  static async time (location) {
    return (await this.call().get("/timezone/" + location)).data;
  }

  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Headers': '*'
  }
}
