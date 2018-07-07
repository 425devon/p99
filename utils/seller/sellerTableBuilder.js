const Table = require('cli-table');
const ora = require('ora')
const itemData = require('../item/itemData')
const sellerLimit = require('../../prompts/sellerLimit')
const mainMenu = require('../../prompts/promptHandler')

module.exports = async (sellerData) =>{
    const spinner = ora().start();
    if(sellerData.data.length == 0){
        console.log(`No Auction Data Available`)
    }
    const table = new Table({
        head: ['Seller', 'Item Name', 'Price', 'Date'],
        colWidths: [25,40,15,15]
    });
    const token = sellerData.pageToken || '';
    const name = sellerData.data[0].sellerName;
    for(let entry of sellerData.data){
        const item = await itemData(entry.itemId)
        table.push([entry.sellerName, item.NAME, entry.price, entry.date]);
    }
    spinner.stop();
    console.log(table.toString());

    if(token != ''){
        const answer = await sellerLimit();
        if(answer.seeMore){
            try{
                return require('../../cmnds/seller')(name, token);
            }catch(err){
                console.log(err)
                process.exit(1);
            }   
        }
        mainMenu();
    }
}