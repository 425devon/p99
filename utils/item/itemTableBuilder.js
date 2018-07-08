const ora = require('ora');
const itemData = require('./itemData');
const Table = require('cli-table');
const auctionHandler = require('../auction/auctionHandler')

module.exports = async (itemArray) =>{
    const spinner = ora().start();
    const getData = async (items) => {
        const result = await itemData(items[0]._id)
        tableBuilder(result)
        spinner.stop();
    }

    const tableBuilder = (data) =>{
        let table = new Table();
        for(const key in data){
            table.push({[key]:data[key]})
        }
        spinner.stop();
        console.log(table.toString());
        auctionHandler(itemArray);
    }
    getData(itemArray);
}


