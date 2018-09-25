var stewPacks = 0;
var stewPrice = 0;

var kebabPacks = 0;
var kebabPrice = 0;

var plainPacks = 0;
var plainPrice = 0;

var ipsum1Packs = 0;
var ipsum1Price = 0;

var ipsum2Packs = 0;
var ipsum2Price = 0;

var ipsum3Packs = 0;
var ipsum3Price = 0;

var totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;


$("#stewPlus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	stewPacks++;
	stewPrice += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#stew").text("You've added " + stewPacks + " pack(s) of Bole & Fried Stew " + "to your cart");
	$("#total").text(totalPrice);
});

$("#kebabPlus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	kebabPacks++;
	kebabPrice += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#kebab").text("You've added " + kebabPacks + " pack(s) of Bole Kebab " + "to your cart");
	$("#total").text(totalPrice);
});

$("#plainPlus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	plainPacks++;
	plainPrice += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#plain").text("You've added " + plainPacks + " pack(s) of Plain Bole " + "to your cart");
	$("#total").text(totalPrice);
});

$("#ipsum1Plus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	ipsum1Packs++;
	ipsum1Price += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#ipsum1").text("You've added " + ipsum1Packs + " pack(s) of Bacon Ipsum " + "to your cart");
	$("#total").text(totalPrice);
});

$("#ipsum2Plus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	ipsum2Packs++;
	ipsum2Price += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#ipsum2").text("You've added " + ipsum2Packs + " pack(s) of Bacon Ipsum " + "to your cart");
	$("#total").text(totalPrice);
});

$("#ipsum3Plus").on("click", function(){
	$("#purchased").text("");
	$("#purchased").css("margin-top", "0");
	ipsum3Packs++;
	ipsum3Price += 300;
	totalPrice = stewPrice + kebabPrice + plainPrice + ipsum1Price + ipsum2Price + ipsum3Price;

	$("#ipsum3").text("You've added " + ipsum3Packs + " pack(s) of Bacon Ipsum " + "to your cart");
	$("#total").text(totalPrice);
});

$("#reset").on("click", function(){

	stewPacks = 0;
	stewPrice = 0;

	kebabPacks = 0;
	kebabPrice = 0;

	plainPacks = 0;
	plainPrice = 0;

	ipsum1Packs = 0;
	ipsum1Price = 0;

	ipsum2Packs = 0;
	ipsum2Price = 0;

	ipsum3Packs = 0;
	ipsum3Price = 0;

	totalPrice = 0;

	$("#purchased").text("Your cart is empty");
	$("#purchased").css("margin-top", "80px");
	$("#total").text(totalPrice)
	$("#stew").text("");
	$("#kebab").text("");
	$("#plain").text("");
	$("#ipsum1").text("");
	$("#ipsum2").text("");
	$("#ipsum3").text("");

})