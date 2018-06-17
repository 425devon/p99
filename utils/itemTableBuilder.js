const ora = require('ora')
const itemData = require('./itemData')
const Table = require('cli-table');

module.exports = async (itemArray) =>{
    const spinner = ora().start();
    const getData = async (items) => {
        let objArray = [];
        for (let i = 0; i < items.length; i++) {
          const result = await itemData(items[i]._id)
          objArray.push(result);
        }
        tableBuilder(objArray)
        spinner.stop();
    }

    const tableBuilder = (data) =>{
        for(let obj in data){
            let tableConstructor = {head:[], colWidths:[]};
            let tableData = [];

            for(let key in data[obj]){
                tableConstructor.head.push(key)
                if(key == 'NAME' || key == 'TYPE' || key == 'CLASS' || key == 'RACE'){
                    tableConstructor.colWidths.push(25)
                }else if(key == 'SLOT' || key == 'SIZE'){
                    tableConstructor.colWidths.push(10)
                }else{
                    tableConstructor.colWidths.push(5)
                }
                tableData.push(data[obj][key])
            }
            let table = new Table(tableConstructor);
            table.push(tableData)
            spinner.stop();
            console.log(table.toString());
        }
    }
    getData(itemArray);
}
