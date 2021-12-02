// Factory, va estar creando objetos
// Que permita a las subclases decidir que clase instanciar

const iPhoneXR = require("./iphone.xr");
const iPhoneXS = require("./iphone.xs");

//Instanciar y a crear nustros objetos

const myIphoneXR = new iPhoneXR('8823456');
const myIphoneXS = new iPhoneXS('4567899');

myIphoneXR.displayConfig();
myIphoneXS.displayConfig();