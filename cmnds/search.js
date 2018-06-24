const ora = require('ora');
const getSearch = require('../utils/search');
const itemTableBuilder = require('../utils/itemTableBuilder');
const mainMenu = require('../prompts/promptHandler');

module.exports = async (item) => {
  const spinner = ora().start()


  try {
    const search = await getSearch(item)

    if(search.length == 0 || !search){
        console.log(`${item} was not found!\n`)
        mainMenu();
    }else{
      itemTableBuilder(search)
    }
    spinner.stop()
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
}