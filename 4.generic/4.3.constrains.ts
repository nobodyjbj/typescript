{
	/**
	 *
	 */
	interface Employee {
		pay(): void;
	}

	class FullTimeEmployee implements Employee {
		pay(): void {
			console.log(`full time!!`);
		}

		workFullTime() {}
	}

	class PartTimeEmployee implements Employee {
		pay(): void {
			console.log(`part time!!`);
		}

		workPartTime() {}
	}

	// 아래 함수와 같이 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 만들면 안된다.
	function payBad(employee: Employee): Employee {
		employee.pay();
		return employee;
	}

	// Employee 타입을 확장한 기능만 가능하도록 선언하는 방법
	function pay<T extends Employee>(employee: T): T {
		employee.pay();
		return employee;
	}

	const june = new FullTimeEmployee();
	const rium = new PartTimeEmployee();
	june.workFullTime();
	rium.workPartTime();

	const juneAfterPay = pay(june);
	const riumAfterPay = pay(rium);

	const obj = {
		name: "june",
		age: 10,
	};

	const obj2 = {
		animal: "🐶",
	};

	function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
		return obj[key];
	}

	console.log(getValue(obj, "name")); // june
	console.log(getValue(obj, "age")); // 10
}
