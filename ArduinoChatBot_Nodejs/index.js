/*jshint esversion: 6 */
const TelegramBot = require('node-telegram-bot-api');

const token = '1415079723:AAEPAlXFBbzlAQI0qf10Z04ALWpzs4Fl7ys';//Cambiar por el token de telegram
const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
  if (Mensaje == "Encender") {
    console.log("encendiendo el led");
    bot.sendMessage(chatId, 'Encendere el led');
  } else if (Mensaje == "Apagar") {
    console.log("apagar el led");
    bot.sendMessage(chatId, 'Apagare el led');
  }
});
