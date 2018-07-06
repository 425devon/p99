const ora = require('ora');
const sellerData = require('../utils/sellerData');
const mainMenu = require('../prompts/promptHandler');
const sellerTable = require('../utils/sellerTableBuilder')

module.exports = async (name) => {
    const spinner = ora().start()
  
    try {
        const data = await sellerData(name);
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