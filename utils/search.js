const axios = require('axios');

module.exports = async (itemName) =>{
    try {
        const item = itemName;
        const response = await axios.get(`https://p99market.com/api/search/${item}`);
        //console.log(response.data.data.items);
        return response.data.data.items;
      } catch (error) {
        console.error("here?");
      }

}