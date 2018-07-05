const inquirer   = require('inquirer');

module.exports ={

  mainMenu: ()=>{
    const questions = [
        {
            name: 'menuChoice',
            type: 'rawlist',
            message: `Please choose from the following:`,
            choices:['Search for item','Search auctions by seller','See version','Get help', 'Exit'],
            default: 0,
          }
    ];
    return inquirer.prompt(questions);
  }
  
}