const axios = require('axios');

module.exports = async (name, token) =>{
    try {
        token = token || '';

        const response = await axios.get(`https://p99market.com/api/seller/${name}/${token}`);
        return(response.data.data);
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
}