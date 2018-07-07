const axios = require('axios');

module.exports = async (id, name) =>{
    try {
        const response = await axios.get(`https://p99market.com/api/auctionData/${id}`);
        for(let obj in response.data.data.auctions){
          response.data.data.auctions[obj]['name'] = name;
        }
        return response.data.data;
      } catch (error) {
        console.error(error);
        process.exit(1);
      }

}