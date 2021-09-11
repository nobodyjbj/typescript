{
	/**
	 * Abstract
	 * 상속으로 확장된 클래스들에서 동잃한 형태로 반복적인 기능이 있다면 Abstract를 사용하라.
	 * 동일한형태로 반복적인 기능을 추출하는 것을 일반화라고 한다.
	 */

	type Coffee = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): Coffee;
	}

	// abstract class는 객체(object)를 생성할 수 없다.
	// 객체들의 공통기능들을 구현할때 사용하면 된다.
	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		public constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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

		// 추상 메서드, 상송받은 하위 클래스에서 구현.
		protected abstract extract(shots: number): Coffee;

		makeCoffee(shots: number): Coffee {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}

		clean(): void {
			console.log("cleanning the machine...");
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}

		private steamMilk(): void {
			console.log("Steaming Milk... 🥛");
		}

		protected extract(shots: number): Coffee {
			this.steamMilk();
			return {
				shots: shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMachine extends CoffeeMachine {
		private addSugar(): void {
			console.log("add sugar... 🌠");
		}

		protected extract(shots: number): Coffee {
			this.addSugar();
			return {
				shots: shots,
				hasSugar: true,
			};
		}
	}

	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMachine(16),
	];

	machines.forEach((machine) => {
		console.log("-----------------------------------");
		machine.makeCoffee(1);
	});
}
