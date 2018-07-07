const inquirer   = require('inquirer');

module.exports = ()=>{
    const questions = [
        {
            name: 'name',
            type: 'input',
            message: `Please enter sellers name:`,
            }
    ];
return inquirer.prompt(questions);
}
  
