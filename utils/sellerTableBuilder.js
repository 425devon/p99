const Table = require('cli-table');
const ora = require('ora')
const itemData = require('./itemData')

module.exports = async (sellerData) =>{
    const spinner = ora().start();
    const table = new Table({
        head: ['Seller', 'Item Name', 'Price', 'Date'],
        colWidths: [25,40,15,15]
    });
    const token = sellerData.pageToken || '';
    for(let entry of sellerData.data){
        const item = await itemData(entry.itemId)
        table.push([entry.sellerName, item.NAME, entry.price, entry.date]);
    }
    spinner.stop();
    console.log(table.toString());
}