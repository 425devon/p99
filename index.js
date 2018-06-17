const minimist = require('minimist')

module.exports = () => {
    console.log(`
            $$$$$$\\  $$$$$$\\ $$\\      $$\\                  $$\\                $$\\     
           $$  __$$\\$$  __$$\\$$$\\    $$$ |                 $$ |               $$ |    
   $$$$$$\\ $$ /  $$ $$ /  $$ $$$$\\  $$$$ |$$$$$$\\  $$$$$$\\ $$ |  $$\\ $$$$$$\\$$$$$$\\   
  $$  __$$\\\\$$$$$$$ \\$$$$$$$ $$\\$$\\$$ $$ |\\____$$\\$$  __$$\\$$ | $$  $$  __$$\\_$$  _|  
  $$ /  $$ |\\____$$ |\\____$$ $$ \\$$$  $$ |$$$$$$$ $$ |  \\__$$$$$$  /$$$$$$$$ |$$ |    
  $$ |  $$ $$\\   $$ $$\\   $$ $$ |\\$  /$$ $$  __$$ $$ |     $$  _$$< $$   ____|$$ |$$\\ 
  $$$$$$$  \\$$$$$$  \\$$$$$$  $$ | \\_/ $$ \\$$$$$$$ $$ |     $$ | \\$$\\\\$$$$$$$\\ \\$$$$  |
  $$  ____/ \\______/ \\______/\\__|     \\__|\\_______\\__|     \\__|  \\__|\\_______| \\____/ 
  $$ |                                                                                
  $$ |                                                                                
  \\__|     
                                                   
    `)
    const args = minimist(process.argv.slice(2))
    const cmd = args._[0]
    //console.log(cmd)

    switch (cmd) {
        case 'search':
        require('./cmnds/search')(args)
        break
        default:
        console.error(`"${cmd}" is not a valid command!`)
        break
    }
}