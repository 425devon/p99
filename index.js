const minimist = require('minimist');
const searchItem = require('./prompts/searchPrompt');

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
    `);

    let args = minimist(process.argv.slice(2));
    let cmd = args._[0] || 'help';

    //Cleaning for search terms with multiple words
    if(args._[0] == 'search' && args._.length > 2){
        let itemName = args._.slice(1).join('_');
        args = { _: [ 'search', itemName ] }
    }


    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
    cmd = 'help'
    }


    switch (cmd) {
        case 'search':
        require('./cmnds/search')(args)
        break;
        case 'help':
        require('./cmnds/help')(args)
        break;
        case 'version':
        require('./cmnds/version')(args)
        break;
        default:
        console.error(`"${cmd}" is not a valid command!`)
        break;
    }
}

// searchItem.searchPrompt.then((item) => {
//     console.log(item)
// }).catch(err => console.log(err));
