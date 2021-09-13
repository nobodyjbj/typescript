{
	/**
	 * Inheritence : 상속
	 */

	type Coffee = {
		shots: number;
		hasMilk: boolean;
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
				throw new Error('value for beans should be greater than 0');
			}

			this.coffeeBeans += beans;
		}

		private grindBeans(shots: number): void {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
		}

		private preheat(): void {
			console.log('heating up... 🔥');
		}

		private extract(shots: number): Coffee {
			console.log(`Pulling ${shots} shots... ☕️`);
			return {
				shots: 5,
				hasMilk: false,
			};
		}

		// 커피콩을 사용하기위한 함수
		makeCoffee(shots: number): Coffee {
			// 글라인더로 커피 갈기
			this.grindBeans(shots);
			// 커피뜨겁게 만들기
			this.preheat();
			// 커피 추출하기
			return this.extract(shots);
		}

		clean(): void {
			console.log('cleanning the machine...');
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		// 하위클래서에서 생성자를 생성할 경우 상위 클래스의 생성자도 함께 생성해야 한다.
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}

		private steamMilk(): void {
			console.log('Steaming Milk... 🥛');
		}

		makeCoffee(shots: number): Coffee {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			};
		}
	}

	const machine = new CoffeeMachine(20);
	const latteMachine = new CaffeLatteMachine(20, 'latte2001120');
	const coffee = latteMachine.makeCoffee(1);
	console.log(coffee);
}
