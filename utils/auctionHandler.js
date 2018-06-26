const auction = require('../prompts/auctionPrompts');
const auctionData = require('../utils/auctionTableBuilder');
const menu = require('../prompts/promptHandler');

module.exports = async (itemArray) => {
    auction.seeAuction().then((answer)=>{ 
        if(answer.seeAuction){
            auction.getAuction().then((res)=>{
                let cmd = res.getAuction;

                switch(cmd){
                    case 'Last 5':
                    auctionData(itemArray,5)
                    break;
                    case 'Last 15':
                    auctionData(itemArray,15)
                    break;
                    case 'All data':
                    auctionData(itemArray,0)
                    break;
                    case 'nvm...':
                    menu()
                    break;
                    default:
                    menu()
                    break;
                }
            })
        }else{
            menu();
        }
    });
}