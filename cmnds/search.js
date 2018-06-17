const ora = require('ora')
const getSearch = require('../utils/search')
const itemTableBuilder = require('../utils/itemTableBuilder')
const auctionTableBuilder = require('../utils/auctionTableBuilder')

module.exports = async (args) => {
  const spinner = ora().start()


  try {
    const item = args._[1];
    const search = await getSearch(item)
    const limit = args.limit || args.l || 0;


    if(search.length == 0 || !search){
        console.log(`${item} was not found`)
    }else{
        if(args.auction || args.a){
            setTimeout(()=> auctionTableBuilder(search, limit), 500)
        }
       itemTableBuilder(search)
    }
    spinner.stop()
  } catch (err) {
    console.error(err)
  }
}