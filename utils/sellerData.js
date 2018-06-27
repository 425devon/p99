const axios = require('axios');

module.exports = async (name, token) =>{
    try {
        token = token || '';

        const response = await axios.get(`https://p99market.com/api/seller/${name}/${token}`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}