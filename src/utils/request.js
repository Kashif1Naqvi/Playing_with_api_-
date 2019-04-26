import axios from "axios";

const API_HOST = "marvel endpoint here...";

const getUrl = endpoint => API_HOST + endpoint;

/**
 * post request
 * @param {*} endpoint
 * @param {*} data
 * @param {*} jwt
 */
export const post = async (endpoint, data, jwt) => {
  const url = getUrl(endpoint);
  const config = {
    headers: {
      "Content-Type": "application/json",
      crossDomain: true
    }
  };

  if (jwt) {
    config["headers"]["Authorization"] = `Bearer ${jwt}`;
  }

  return axios.post(url, data, config);
};

/**
 * get request
 * @param {*} endpoint
 * @param {*} jwt
 */
export const get = async (endpoint, jwt) => {
  const url = getUrl(endpoint);
  const headers = {
    headers: { Authorization: `Bearer ${jwt}` }
  };
  const config = jwt ? headers : null;

  return axios.get(url, config);
};
