const ora = require('ora')
const auctionData = require('./auctionData')
const menu = require('../prompts/promptHandler');
const Table = require('cli-table');

module.exports = (itemArray, limit) =>{
    const spinner = ora().start();
    let table = new Table({
        head: ['Item Name', 'Price', 'Date', 'Seller']
      , colWidths: [25,10,15,25]
    });

    const getData = async (items) => {
        try{
            const result = await auctionData(items[0]._id, items[0].NAME)
                if(result.auctions.length == 0){
                    //todo chalk red for visibility
                    console.log(`no auction data available for ${items[0].NAME}`)
                    menu();
                }else
                if(limit > 0 && limit < result.auctions.length){
                    tableBuilder(result.auctions.reverse().slice(0,limit));
                }else{
                    tableBuilder(result.auctions.reverse());
                }
            spinner.stop();
        }catch(error){
            console.log(error);
            process.exit(1);
        }
    }

    const tableBuilder = (data) =>{
        spinner.start();
        for(let obj in data){
            table.push([data[obj].name, data[obj].price, data[obj].date, data[obj].sellerName])
        }
        spinner.stop();
        try{
            console.log(table.toString());
        }catch(error){
            console.log(error);
            process.exit(1);
        }
    }
    getData(itemArray);
}