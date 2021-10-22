/*
var precioHelado = 2000 + " pesos Colombianos";
// var precioToppingOreo = 800 + " pesos Colombianos"
// var precioToppingKitKat = 1200 + " pesos Colombianos"
// var precioToppingGomitas = 1000 + " pesos Colombianos"
var toppings = [" Oreo: ", " Kit Kat: ", " Gomitas: "];
toppings[0] = toppings[0] + 800 + " pesos Colombianos";
toppings[1] = toppings[1] + 1200 + " pesos Colombianos"
toppings[2] = toppings[2] + 1000 + " pesos Colombianos"

document.write(toppings);

var ordenHelado = prompt("Quiere usted un helado?").toLowerCase;
var ordenToppingOreo = prompt("Quiere usted agregar oreos a su helado?").toLowerCase;
var ordenToppingKitKat = prompt("Quiere usted agregar Kit Kat a su helado?").toLowerCase;
var ordenToppingCereal = promt("Quiere usted agregar cereal a su helado").toLowerCase;
*/

var topping = prompt("Toppings disponibles, Oreo, KitKat, Gomitas y Cereal").toLowerCase();
var aditionalTopping = prompt("Quieres agregar otro topping? Disponibles, Oreo, KitKat, Gomitas y Cereal").toLowerCase();
		var precio = 0;
		var extraTopping = 0;
		var helado = 2000;
		var precioFinal = 0;

		if(topping=="oreo"){
			precio = 800;
		}else if(topping == "kitkat"){
			precio = 1500;
		}else if(topping == "gomitas"){
			precio = 1000;
		}else  if(topping == "cereal"){
			precio = 600;
		}else{
			precio = 0;
		}

		if(aditionalTopping=="oreo"){
			extraTopping = 800;
		}else if(aditionalTopping == "kitkat"){
			extraTopping = 1500;
		}else if(aditionalTopping == "gomitas"){
			extraTopping = 1000;
		}else  if(aditionalTopping == "cereal"){
			precio = 600;
		}else{
			precio = 0;
			document.write("Asegurese de escribir bien el nombre del topping en caso de no reflejarse en el precio final.")
		}

		precioFinal = helado + precio + extraTopping;
		document.write("el helado cuesta " + precioFinal + " Pesos Colombianos");


