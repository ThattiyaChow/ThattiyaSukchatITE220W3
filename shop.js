var customername = "Cho";
var price = [40, 10, 20, 80, 10];
var quantity = 3;
var totalPrice = 0;
var products = ["Pizza","Naan","Sourdough","Foccacia","White bread"];

var greeting ="";
var time = new Date().getHours();
if (time<12){
	greeting = "Good morning";
} else if (time<18){
	greeting = "Good afternoon";
} else {
	greeting = "Good evening";
}

var productsText = "";
var productsElement = document.getElementById("product-list")

for (i=0;i<products.length;i++) {
productsText = productsText + "<li class='list-group-item'>" + products[i] +"<span class='badge badge-pill badge-secondary float-right'>$" + price[i] + "</li>";
productsElement.innerHTML = productsText;
totalPrice += price[i];
}
document.getElementById("customer-name").innerHTML = customername;
document.getElementById("price").innerHTML = "$" + totalPrice*0.75 + "&ensp;";
document.getElementById("greetingText").innerHTML = greeting;