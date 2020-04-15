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

  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
}
