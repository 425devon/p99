const menu = require('./mainPrompt')
const search = require('./searchPrompt')
const seller = require('./searchSeller')

module.exports = async () =>{
    const choice = await menu.mainMenu();
    const cmd = await choice['menuChoice'];

    switch (cmd) {
        case 'Search for item':
        const searchItem = await search();
        require('../cmnds/search')(searchItem['item'])
        break;
        case 'Search auctions by seller':
        const getName = await seller();
        require('../cmnds/seller')(getName.name);
        break;
        case 'Get help':
        require('../cmnds/help')
        break;
        case 'See version':
        require('../cmnds/version')();
        break;
        case 'Exit':
        //todo chalk red
        console.log("Now exiting c99...")
        process.exit(0)
        break;
        default:
        console.error(`${cmd} is not a valid command!`)
        break;
    } 
}
