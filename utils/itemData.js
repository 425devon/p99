const axios = require('axios');

module.exports = async (id) =>{
    try {
        const response = await axios.get(`https://p99market.com/api/item/${id}`);
        //clean response for tableBuilder
        delete response.data.data.item._id;
        delete response.data.data.item.ICON;
        delete response.data.data.item.SEARCHABLE_NAME;
        
        return response.data.data.item;
      } catch (error) {
        console.error(error);
      }

}