const axios = require('axios');

const Module = {

  async nsfw(endpoint) {
    return new Promise(async(resolve, reject) => {
      if (!endpoint) return reject('[Love-You] Error, no endpoint specified');
      try {
        await axios({
            method: 'get',
            url: `https://love-you.xyz/api/v2/${endpoint}`,
            responseType: 'json'
          })
            .then(function (response) {
              resolve(response.data.url);
            })
            .catch(err => {
          return reject(err);
        });
      } catch (e) {
        return reject(err.message)
      };
    });
  }
}

module.exports = Module;