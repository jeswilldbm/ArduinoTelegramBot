/*jshint esversion: 6 */
const TelegramBot = require('node-telegram-bot-api');

const token = '1415079723:AAEPAlXFBbzlAQI0qf10Z04ALWpzs4Fl7ys';//Cambiar por el token de telegram
const bot = new TelegramBot(token, {
  polling: true
});
var IdMiChat = 616815725;//cambiar por tu ID del chat

var SerialPort = require('serialport');
var MiPuerto = new SerialPort('COM3', {
  baudRate: 9600,
  autoOpen: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
  if (Mensaje == "Encender Rojo") {
    console.log("encendiendo el led rojo");
    bot.sendMessage(chatId, 'Encendere el led Rojo');
    MiPuerto.write("H");
  } else if (Mensaje == "Apagar Rojo") {
    console.log("apagar el led");
    bot.sendMessage(chatId, 'Apagare el led Rojo');
    MiPuerto.write("L");
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
  if (Mensaje == "Encender Amarillo") {
    console.log("encendiendo el led amarillo");
    bot.sendMessage(chatId, 'Encendere el led Amarillo');
    MiPuerto.write("A");
  } else if (Mensaje == "Apagar Amarillo") {
    console.log("apagar el led Amarillo");
    bot.sendMessage(chatId, 'Apagare el led Amarillo');
    MiPuerto.write("B");
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El ID del char" + chatId);
  var Mensaje = msg.text;
  if (Mensaje == "Encender Azul") {
    console.log("encendiendo el led azul");
    bot.sendMessage(chatId, 'Encendere el led Azul');
    MiPuerto.write("C");
  } else if (Mensaje == "Apagar Azul") {
    console.log("apagar el led Azul");
    bot.sendMessage(chatId, 'Apagare el led Azul');
    MiPuerto.write("D");
  }
});
