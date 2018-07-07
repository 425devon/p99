const axios = require('axios');

module.exports = async (item) =>{
    try {
        const response = await axios.get(`https://p99market.com/api/search/${item}`);
        return response.data.data.items;
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
}