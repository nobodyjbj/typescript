{
	/**
	 * Encapsulation : 은닉화, 캡슐화
	 * 외부에서 내부의 정보를 은닉하는 것
	 * 외부로부터 내부의 정보의 수정을 차단하는 것
	 * 인터페이스(규약)에 의해서만 정보를 컨트롤 할 수 있도록 하는 것
	 *
	 * public : 기본값, 외부의 접근을 허용
	 * private : 외부의 접근을 허용하지 않음
	 * protected : 외부에서 접근할 수 없지만 상속관계, 하위 클래스에서는 접근할 수 있도록 하는 것
	 */

	type Coffee = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		// 객체 생성시 생성자를 private로 만들어서 static 메서드를 활용하게 유도하는 것이 좋다.
		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		// 커피콩을 채우기위한 함수
		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}

			this.coffeeBeans += beans;
		}

		// 커피콩을 사용하기위한 함수
		makeCoffee(shots: number): Coffee {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}

			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
			return {
				shots: shots,
				hasMilk: false,
			};
		}
	}

	const maker = CoffeeMaker.makeMachine(32);
	maker.makeCoffee(3);
	console.log(maker);

	/**
	 * getter, setter
	 */
	class User {
		/*
        private firstName: string;
        private lastName: string;
        
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        */
		// 위의 주석된 생선자 선언 코드는 아래와 같다.
		// 멤버변수도 생성자에서 생성이 된다.
		constructor(private firstName: string, private lastName: string) {}

		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		private internalAge = 0;
		get age(): number {
			return this.internalAge;
		}

		set age(num: number) {
			if (num < 0) {
				throw new Error(
					`Negative numbers or 0 cannot be entered. Input value : ${num}`
				);
			}
			this.internalAge = num;
		}
	}

	const user = new User("Steave", "Jobs");
	// user.firstName = 'June';
	// console.log(user.fullName); // getter를 호출할때는 함수형이 아니라, 변수형으로 호출한다.

	user.age = 6; // setter인 age()에 값을 입력할때 함수형이지만 외부에서는 변수형태로 입력한다.
	console.log(user.fullName);
}
