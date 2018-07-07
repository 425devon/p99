const inquirer   = require('inquirer');

module.exports =()=>{
    const questions = [
        {
            name: 'seeMore',
            type: 'confirm',
            message: `Would you like to see auction data from this seller?:`,
            default: [true],
        }
    ];
    return inquirer.prompt(questions);
}