const inquirer   = require('inquirer');

module.exports ={

  mainMenu: ()=>{
    const questions = [
        {
            name: 'menuChoice',
            type: 'list',
            message: `Please choose from the following:`,
            choices:['Search for item','Search auctions by seller','See version','About', 'Exit'],
            default: 0,
          }
    ];
    return inquirer.prompt(questions);
  }
  
}