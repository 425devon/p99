const ora = require('ora')
const itemData = require('./itemData')
const Table = require('cli-table');

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
    }
    getData(itemArray);
}
