const ora = require('ora')
const itemData = require('./itemData')
const Table = require('cli-table');
const auction = require('../prompts/auctionPrompts')
const menu = require('../prompts/promptHandler');

module.exports = async (itemArray) =>{
    const spinner = ora().start();
    const getData = async (items) => {
        const result = await itemData(items[0]._id)
        tableBuilder(result)
        spinner.stop();
    }

    const tableBuilder = (data) =>{
        let tableConstructor = {head:[], colWidths:[]};
        let tableData = [];

        for(let key in data){
            tableConstructor.head.push(key)
            if(key == 'NAME' || key == 'TYPE' || key == 'CLASS' || key == 'RACE'){
                tableConstructor.colWidths.push(25)
            }else if(key == 'SLOT' || key == 'SIZE'){
                tableConstructor.colWidths.push(10)
            }else{
                tableConstructor.colWidths.push(5)
            }
            tableData.push(data[key])
        }
        let table = new Table(tableConstructor);
        table.push(tableData)
        spinner.stop();
        console.log(table.toString());
        //Call auction prompt once item table is displayed
        //Todo find a better way to modularize this
        auction.seeAuction().then((answer)=>{ 
            if(answer.seeAuction){
                auction.getAuction().then((res)=>{
                    console.log(`returned this ${res.getAuction}`)
                })
            }else{
                menu();
            }
        });

    }
    getData(itemArray);
}

