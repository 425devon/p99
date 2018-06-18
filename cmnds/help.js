const chalk = require('chalk');
const menus = {
    welcome: `
    Welcome to c99!
    This tool is a streamlined CLI for www.p99market.com\n
    `,
    main: `
      c99 [command] <options>
  
      search ............. search items by name
      version ............ show package version
      help ............... show help menu for a command\n\n`,
  
    search: `
      search:

      c99 search {item name} <options>

      -auction, -a ........... include auction data if any
      -limit, -l {number} .... limits auction data to {x} most recent
      
      EXAMPLE:
      
      c99 search flowing black robe -al 10`
      ,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || chalk.bold(menus.welcome) +menus.main + menus.search)
}