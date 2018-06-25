const inquirer   = require('inquirer');

module.exports ={

  seeAuction: ()=>{
    const questions = [
        {
            name: 'seeAuction',
            type: 'confirm',
            message: `Would you like to see auction data for this item?:`,
            default: [true],
        }
    ];
    return inquirer.prompt(questions);
  },

  getAuction: ()=>{
    const questions = [
        {
            name: 'getAuction',
            type: 'list',
            message: `Please choose:`,
            choices: ['Last 5', 'Last 15','All data','nvm...'],
            default: [0],
        }
    ];
    return inquirer.prompt(questions);
  }
  
}