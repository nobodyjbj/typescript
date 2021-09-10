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

		public constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		// 커피콩을 채우기위한 함수
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
			return this.extract(shots);
		}

		clean(): void {
			console.log("cleanning the machine...");
		}
	}

	class CheapMilkSteamer {
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

	class CandySugarMixer {
		private getSuger(): boolean {
			console.log("Getting som sugar from jar 🍬");
			return true;
		}

		addSugar(cup: Coffee): Coffee {
			return {
				...cup,
				hasSugar: this.getSuger(),
			};
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(
			beans: number,
			public readonly serialNumber: string,
			private milkFother: CheapMilkSteamer
		) {
			super(beans);
		}

		makeCoffee(shots: number): Coffee {
			const coffee: Coffee = super.makeCoffee(shots);
			return this.milkFother.makeMilk(coffee);
		}
	}

	class SweetCoffeeMachine extends CoffeeMachine {
		constructor(private beans: number, private sugar: CandySugarMixer) {
			super(beans);
		}

		makeCoffee(shots: number): Coffee {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	class SweetCoffeLatteMachine extends CoffeeMachine {
		constructor(
			private beans: number,
			private milk: CheapMilkSteamer,
			private sugar: CandySugarMixer
		) {
			super(beans);
		}

		makeCoffee(shots: number): Coffee {
			const coffee: Coffee = super.makeCoffee(shots);
			const sugarCoffee: Coffee = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarCoffee);
		}
	}

	const cheapMilkSteamer = new CheapMilkSteamer();
	const candySugar = new CandySugarMixer();
	const sweetMachine = new SweetCoffeeMachine(12, candySugar);
	const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkSteamer);
	const sweetLatteMachine = new SweetCoffeLatteMachine(
		12,
		cheapMilkSteamer,
		candySugar
	);
}
