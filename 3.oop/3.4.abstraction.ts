{
	/**
	 * Abstraction : 추상화
	 * Encapsulation을 사용하여 외부에서 사용해야할 멤버변수 or 메서드를 공개하는 것도 추상화이다.
	 * Interface는 규약에 의한 메시지를 외부로부터 주고 받는 것을 의미한다. Contract(계약서)의 관점으로도 이해할 수 있다.
	 */

	type Coffee = {
		shots: number;
		hasMilk: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): Coffee;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): Coffee;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		private constructor(coffeeBeans: number) {
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

	const machine: CoffeeMachine = CoffeeMachine.makeMachine(32);
	machine.fillCoffeeBeans(32);
	machine.makeCoffee(5);

	const commercialMachine: CommercialCoffeeMaker =
		CoffeeMachine.makeMachine(16);
	commercialMachine.clean();
	commercialMachine.fillCoffeeBeans(5);
	commercialMachine.makeCoffee(3);

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}

		static createAmateurUser(machine: CoffeeMaker): AmateurUser {
			return new AmateurUser(machine);
		}

		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}

	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) {}

		static createProBarista(machine: CommercialCoffeeMaker): ProBarista {
			return new ProBarista(machine);
		}

		makeCoffee() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(20);
			this.machine.clean();
		}
	}

	const coffeeMachine: CoffeeMachine = CoffeeMachine.makeMachine(32);
	const amateur = AmateurUser.createAmateurUser(coffeeMachine);
	const proBarista = ProBarista.createProBarista(coffeeMachine);
	amateur.makeCoffee();
	proBarista.makeCoffee();
}
