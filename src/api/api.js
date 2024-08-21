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

export const get = async url => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
