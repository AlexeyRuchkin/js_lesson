let money = prompt ("Ваш бюджет?");
let shop = prompt ("Название вашего магазина?");
let num = 0;


let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
}



/*while (num < 5)  {
	let a = prompt ("Какой тип товаров будем продавать?");
	
	

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[num] = a;
		num++;
	} else {
		
		console.log('Не верно!');
	}
	
}
*/

for (let i = 0; i < 5; i++) {

	let a = prompt ("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string'  && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {

		console.log('Не верно!');

	}
	
}


/*do {
	let a = prompt ("Какой тип товаров будем продавать?");
	num++;
	

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[num] = a;
	}	
}
while (num < 5);*/

alert(mainList.budget / 30);

console.log(mainList);






