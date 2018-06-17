const axios = require('axios');

module.exports = async (id) =>{
    try {
        const response = await axios.get(`https://p99market.com/api/auctionData/${id}`);
        return response.data.data;
      } catch (error) {
        console.error(error);
      }

}