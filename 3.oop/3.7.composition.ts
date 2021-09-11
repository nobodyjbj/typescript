{
	/**
	 * interface : 규약
	 * decoupling : 어떠한 클래스의 변경이 다른클래스에게 영향을 주지 않는 것.
	 * decoupling을 하기 위해 interface를 활용하는 예제
	 */

	type Coffee = {
		shots: number;
		hasMilk: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): Coffee;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		public constructor(
			coffeeBeans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {
			this.coffeeBeans = coffeeBeans;
		}

		fillCoffeeBeans(beans: number): void {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}

			this.coffeeBeans += beans;
		}

		private grindBeans(shots: number): void {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		private extract(shots: number): Coffee {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots: 5,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): Coffee {
			this.grindBeans(shots);
			this.preheat();
			const coffee = this.extract(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}

		clean(): void {
			console.log("cleanning the machine...");
		}
	}

	interface MilkFrother {
		makeMilk(coffee: Coffee): Coffee;
	}

	interface SugarProvider {
		addSugar(coffee: Coffee): Coffee;
	}

	class CheapMilkSteamer implements MilkFrother {
		private steamMilk(): boolean {
			console.log("Steaming som milk... 🥛");
			return true;
		}

		makeMilk(cup: Coffee): Coffee {
			return {
				...cup,
				hasMilk: this.steamMilk(),
			};
		}
	}

	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): boolean {
			console.log("Steaming som milk... 🥛");
			return true;
		}

		makeMilk(coffee: Coffee): Coffee {
			return {
				...coffee,
				hasMilk: this.steamMilk(),
			};
		}
	}

	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): boolean {
			console.log("Steaming som milk... 🥛");
			return true;
		}

		makeMilk(coffee: Coffee): Coffee {
			return {
				...coffee,
				hasMilk: this.steamMilk(),
			};
		}
	}

	class NoMilk implements MilkFrother {
		makeMilk(coffee: Coffee): Coffee {
			return coffee;
		}
	}

	class CandySugarMixer implements SugarProvider {
		private getSuger(): boolean {
			console.log("Getting som sugar from jar 🍬");
			return true;
		}

		addSugar(coffee: Coffee): Coffee {
			return {
				...coffee,
				hasSugar: this.getSuger(),
			};
		}
	}

	class SugarMixer implements SugarProvider {
		private getSuger(): boolean {
			console.log("Getting som sugar from jar 🍬");
			return true;
		}

		addSugar(coffee: Coffee): Coffee {
			return {
				...coffee,
				hasSugar: this.getSuger(),
			};
		}
	}

	class NoSugar implements SugarProvider {
		addSugar(coffee: Coffee): Coffee {
			return coffee;
		}
	}

	// Milk
	const cheapMilkSteamer = new CheapMilkSteamer();
	const fancyMilkSteamer = new FancyMilkSteamer();
	const coldMilkSteamer = new ColdMilkSteamer();
	const noMilk = new NoMilk();

	// Sugar
	const candySugar = new CandySugarMixer();
	const sugar = new SugarMixer();
	const noSugar = new NoSugar();

	const sweetCandyMachine = new CoffeeMachine(10, noMilk, candySugar);
	const sweetMachine = new CoffeeMachine(10, noMilk, sugar);

	const cheapLatteMachine = new CoffeeMachine(10, cheapMilkSteamer, noSugar);
	const fancyLatteMachine = new CoffeeMachine(10, fancyMilkSteamer, noSugar);
	const coldLatteMachine = new CoffeeMachine(10, coldMilkSteamer, noSugar);
	const sweetLatteMachine = new CoffeeMachine(12, cheapMilkSteamer, sugar);
}
