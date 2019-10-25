function Pet() {
	let petName = 'Noname'; //we create private variables that characterize our pet and give them default values
	let petHealth = 100;
	let petHappiness = 100;
	let petHunger = 0;
	let petEnergy = 100;
	let petThirstForWater = 0;
	let petPurity = 100;
	let arrayPetInfo = [];

	this.getPetInfo = function() { //a method that returns us an array of our variables
		arrayPetInfo["Ім'я"] = petName;
		arrayPetInfo["Здоров'я"] = petHealth;
		arrayPetInfo["Щастя"] = petHappiness;
		arrayPetInfo["Енергія"] = petEnergy;
		arrayPetInfo["Голод"] = petHunger;
		arrayPetInfo["Жажда"] = petThirstForWater;
		arrayPetInfo["Чистота"] = petPurity;
		return arrayPetInfo;
	}

	this.setName = function(name) { //we create setters to give meaning to our variables
		if (petHealth > 0) {
			if (!arguments.length) {
				petName;
			} else {
				petName = name;
			}
		} else {
			console.log("Навіщо вам міняти ім'я вашого помершого " + petName);
		}
	}

	this.setHealth = function(health) {
		if (petHealth > 0) {
			if (!arguments.length) {
				petHealth;
			} else {
				petHealth = +health;
			}
		} else {
			console.log("Тепер ви хочете повернути до життя свого питомця, але уже пізно😔")
		}
	}

	this.setHappiness = function(happiness) {
		if (petHealth > 0) {
			if (!arguments.length) {
				petHappiness;
			} else {
				petHappiness = +happiness;
			}
		} else {
			console.log("Яке щастя, коли горе настало, що по вашій вині помер " + petName)
		}
	}

	this.setHunger = function(hunger) {
		if (petHealth > 0) {
			if (!arguments.length) {
				petHunger;
			} else {
				petHunger = +hunger;
			}
		} else {
			console.log("Як у того хто загинув може бути якийсь апетит?");
		}
	}

	this.setEnergy = function(energy) {
		if (petHealth > 0) {
			if (!arguments.length) {
				petEnergy;
			} else {
				petEnergy = +energy;
			}
		} else {
			console.log("Мені чогось так здається, що після смерті у " + petName + " не може бути енергії зовсім");
		}
	}

	this.setThirstForWater = function(thirstForWater) {
		if (petHealth > 0) {
			if (!arguments.length) {
				petThirstForWater;
			} else {
				petThirstForWater = +thirstForWater;
			}
		} else {
			console.log("Жаджи у нього уже точно не може бути(");
		}
	}

	this.walk = function() { //Next we create methods that will affect our variables
		if (petHealth > 0) {
			console.log("Прогулянка з " + petName);
			petHealth += 10;
			petEnergy -= 25;
			petHunger += 15;
			petThirstForWater += 25;
			petHappiness += 15;
			petPurity -= 25;
		} else {
			console.log("Ви убили свого " + petName + ", як ви хочете з ним гуляти?")
		}
	}

	this.eat = function() {
		if (petHealth > 0) {
			console.log(petName + " їсть");
			petEnergy += 5;
			petHunger -= 15;
			petThirstForWater += 10;
			petPurity -= 5;
		} else {
			console.log("Мені так здається, що після смерті уже ніхто не може їсти");
		}
	}

	this.drink = function() {
		if (petHealth > 0) {
			console.log(petName + " п'є");
			petThirstForWater -= 10;
		} else {
			console.log("Мені так здається, що після смерті уже ніхто не може пити");
		}
	}

	this.sleep = function() {
		if (petHealth > 0) {
			console.log(petName + " спить");
			petEnergy += 20;
			petHunger += 15;
			petThirstForWater += 15;
			petHappiness += 3;
		} else {
			console.log("Він і так пішов на упокій(");
		}
	}

	this.washUp = function() {
		if (petHealth > 0) {
			console.log(petName + " вимивається");
			petPurity += 30;
		} else {
			console.log("Після смерті не дуже вийде уже вимитися");
		}
	}

	this.die = function() {
		if (petHealth > 0) {
			console.log(petName + " помер по вашій вині.😥");
			petHealth = 0;
			petPurity = 0;
			petHunger = 0;
			petEnergy = 0;
			petHappiness = 0;
			petThirstForWater = 0;
		} else {
			console.log("Вам не вистачило одного разу? Він і так помер через вас, то ви хочете ще раз його убити?");
		}
	}
}