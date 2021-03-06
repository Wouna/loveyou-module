const axios = require('axios');

const Module = {
    async nsfw(endpoint) {
        return new Promise(async (resolve, reject) => {
            if (!endpoint) return reject('[Love-You] Error, no endpoint specified');
            
            await axios.get(`https://love-you.xyz/api/v2/${endpoint}`).then(function(response) {
                resolve(response.data.url);
            }).catch(err => {
                return reject(err);
            });
        });
    }
}

module.exports = Module;
