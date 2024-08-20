import axios from 'axios';

export const post = async (url, postBody = null) => {
  try {
    const response = await axios.post(url, postBody);

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const get = async (
  url,
  queryParams = null,
  headers = undefined,
  timeout = '0s',
) => {
  try {
    const response = await axios.get(url, {
      headers,
      timeout, // default is 0s
      params: {
        ...queryParams,
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
