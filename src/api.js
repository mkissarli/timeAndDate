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

  static async locations (timezone) {
    return (await this.call().get("/timezone/" + timezone)).data;
  }

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
