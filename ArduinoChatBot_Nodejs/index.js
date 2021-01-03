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
  if (Mensaje == "Encender rojo") {
    console.log("encendiendo el led rojo");
    bot.sendMessage(chatId, 'Encendere el led rojo');
    MiPuerto.write("A");
  } else if (Mensaje == "Apagar rojo") {
    console.log("apagar el led rojo");
    bot.sendMessage(chatId, 'Apagare el led Rojo');
    MiPuerto.write("B");
  }
  else if (Mensaje == "Encender amarillo") {
   console.log("encendiendo el led Amarillo");
   bot.sendMessage(chatId, 'Encendere el led amarillo');
   MiPuerto.write("C");
 }
 else if (Mensaje == "Apagar amarillo") {
  console.log("apagar el led Amarillo");
  bot.sendMessage(chatId, 'Apagare el led Amarillo');
  MiPuerto.write("D");
}
else if (Mensaje == "Encender azul") {
 console.log("encender el led azul");
 bot.sendMessage(chatId, 'Encendere el led Azul');
 MiPuerto.write("E");
}
else if (Mensaje == "Apagar azul") {
 console.log("apagar el led azul");
 bot.sendMessage(chatId, 'Apagare el led Azul');
 MiPuerto.write("F");
}
});

MiPuerto.setEncoding('utf8');

MiPuerto.on('data', function(data) {
  console.log("Lo que entro es " + data);
  if (data[0] == 'H') {
    console.log("Boton Precionado");
    bot.sendMessage(IdMiChat, "Se preciono el boton");
  }
});
