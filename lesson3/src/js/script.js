 let money,
 	 name, 
 	 time,
 	 price


function start() {
	money = prompt ("Ваш бюджет?");

	while (isNaN(money) || money == '' || money == null) {
		money = prompt ("Ваш бюджет?");
	}

	name = prompt ("Название вашего магазина?").toUpperCase();
	time = 23;
}
start();


let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
}



function chooseGoods() {
	for (let i = 0; i < 5; i++) {

		let a = prompt ("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string'  && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i -1;
		}
		
	}

}
chooseGoods();	

function workTime(){
	if (time < 0) {
	console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!') 
		} else if (time < 24) {
			console.log('Уже слишком поздно!')
			} 	else {
				console.log('В сутках только 24 часа!');
				}
}
workTime(15);

function takeBudget() {
	alert('Ежедневный бюджет ' + mainList.budget / 30);

}
takeBudget();

function discountCalculation() {
	if (discount = true) {
		price*0,8
	}
}


function hireEmployees() {
	for (let i = 0; i < 4; i++) {

		let nameEmployele = prompt ('Имя сотрудника:');
		if ((typeof(nameEmployele)) === 'string' && (typeof(nameEmployele)) != null && nameEmployele != '') {
			mainList.employers[i + 1] = nameEmployele;			 
		} else {
			i = i - 1;
		}
		
	}
	
}
hireEmployees();


console.log(mainList);




