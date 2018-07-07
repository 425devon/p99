const ora = require('ora');
const sellerData = require('../utils/seller/sellerData');
const mainMenu = require('../prompts/promptHandler');
const sellerTable = require('../utils/seller/sellerTableBuilder')

module.exports = async (name, token) => {
    const spinner = ora().start()
    token = token || '';
    try {
        const data = await sellerData(name, token);
        if(data.data.length == 0){
            //todo chalk red for visibility
            spinner.stop();
            console.log(`Seller ${name} not found`)
            mainMenu();
        }else{
            sellerTable(data);
        }
        spinner.stop();
    } catch (err) {
      console.error(err)
      process.exit(1);
    }
  }