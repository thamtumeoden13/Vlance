import {printLogs} from '../utils/logUtils';

export async function makeRequest(url, data = {}) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: data,
    });
    printLogs({url, response});
    return response.json();
  } catch (err) {
    printLogs({apiErr: err});
    return Promise.reject(err);
  }
}
