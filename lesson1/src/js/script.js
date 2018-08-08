
var moneyMonth;
var shopName;
var manList = {};
var shopGoods = [];
var employers = {};
var open = false


moneyMonth = prompt ("Ваш бюджет на месяц?");
shopName = prompt ("Название вашего магазина?");

manList = {
		moneyMonth,
		shopName,
		shopGoods,
		employers,
		open,
		 
}


for (i = 0; i < 3; i++) {

	 shopGoods[i] = prompt ("Какой тип товаров будем продавать?");
}

alert(shopGoods);

alert(moneyMonth/30);



console.log(manList);






