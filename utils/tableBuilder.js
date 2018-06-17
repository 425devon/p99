const ora = require('ora')
const auctionData = require('./auctionData')
const Table = require('cli-table');

module.exports = async (itemArray) =>{
    const spinner = ora().start();
    let table = new Table({
        head: ['Item Name', 'Price', 'Date', 'Seller']
      , colWidths: [50,25,25,50]
    });

    const getData = async (items) => {
        for (let i = 0; i < items.length; i++) {
          const result = await auctionData(items[i]._id)
          tableBuilder(result.auctions.reverse());
        }
        spinner.stop();
    }

    const tableBuilder = (data) =>{
        spinner.start();
        for(let obj in data){
            table.push(['huh...', data[obj].price, data[obj].date, data[obj].sellerName])
        }
        try{
            spinner.stop();
            console.log(table.toString());
        }catch(error){
            spinner.stop();
            console.log(error);
        }
    }
    //getData(itemArray);
    console.log(itemArray)
}