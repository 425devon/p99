const menu = require('../prompts/promptHandler')
const { version } = require('../package.json')

module.exports = () =>{
    console.log(`v${version}`)
    menu();
}

