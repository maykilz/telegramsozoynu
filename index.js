const TelegramApi = require('node-telegram-bot-api') 
const token = "5326738869:AAFrgaYXVtLGkz20pWpvRTgS06lTsDtAhOI"
const bot = new TelegramApi(token, {polling:true})

bot.setMyCommands([
    {command: '/reqemoynu', description: 'oyun'}, 

]);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


 

  let rand;
  function game() { 
    bot.on('message', msg =>  {  
        const text = msg.text; 
        const chatid = msg.chat.id;  
        function start() {
            
          rand = getRandomInt(10);  
          console.log(rand); 
          
          bot.on('message', msg2=>{ 
              

            console.log(msg2.text); 
          if (msg2.text==rand) {  
               
               bot.sendMessage(chatid, `Sən qalibsən, sənin adın: ${msg2.from.first_name} ` ); 
              start()
          }
           
        });  
        return bot.sendMessage(chatid, `Rəqəm oyunu başladı` );  
      } 

        if(text=='/reqemoynustop@Area_tagbot' ) {  
         
          bot.sendMessage(msg.chatid, `Rəqəm oyunu dəyəndırıldi` );   
         rand =1000000000;
   
       } else {
        if(text=='/reqemoynu@Area_tagbot' ) {  
        console.log('getstart')
        start(); 
       } }
    })  

    rand =-1;
  } 
  game(); 