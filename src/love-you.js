const snekfetch = require('snekfetch');

const Module = {

  async images(endpoint, token) {
    return new Promise(async(resolve, reject) => {
      if (!endpoint) return reject('[Love-You] Error, no endpoint specified');
      if (!token) return reject('[Love-You] Error, no token specified');
      try {
        await snekfetch.get(`https://love-you.xyz/api/v1/${endpoint}?token=${token}`).then(res => {
          if (res.error) reject(res.error);
          resolve(res.body.url)
        }).catch(err => {
          return reject(err);
        });
      } catch (e) {
        return reject(err.message)
      };
    });
  }
}

module.exports = Module;