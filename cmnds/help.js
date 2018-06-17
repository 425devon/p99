const menus = {
    main: `
      c99 [command] <options>
  
      search ............. search items by name
      version ............ show package version
      help ............... show help menu for a command`,
  
    search: `
      c99 search <options>`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
}