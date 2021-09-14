{
	/**
	 * ProtoType : 클래스에서 속성과 함수를 정의 한 것처럼 ProtoType도 정의할 수 있다.
	 * 단어 뜻 : 추상적인 것을 무엇을 만들다.
	 * Javasciprt : ProtoType 을 기반으로 상속을 구현할 수 있다.
	 *
	 * live server를 활용한 데모
	 */

	const x = {};
	const y = {};
	console.log(x);
	console.log(y);
	// 실행을 하면, {} [[Prototype]]: Object 라는 것을 확인 할 수 있는데, 자바스크립트에서는 모든 오브젝트는 Prototype라는 오브젝트를 상속받고 있다.

	console.log(x.prototype === y.prototype); // true, x와 y가 같은 protorype을 상속 받고 있다.

	const array = [];
	console.log(array); // [[Prototype]]: Array(0) 를 상속받음

	console.clear();

	// 생성자 함수(Constructor function)
	function CoffeeMachine(beans) {
		this.beans = beans;
		// Instance member level
		// this.makeCoffee = (shot) => {
		// 	console.log('making... ☕️');
		// };
	}

	// prototype level로 내가 만든 함수를 넣는 방법, 결국 Object를 상속받고 있다.
	CoffeeMachine.prototype.makeCoffee = (shots) => {
		console.log('making... ☕️');
	};
	const machine1 = new CoffeeMachine(10);
	const machine2 = new CoffeeMachine(20);
	console.log(machine1);
	console.log(machine2);

	function LatteMachine(milk) {
		this.milk = milk;
	}

	const latteMachine = new LatteMachine(111);
	LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // LatteMachine이 CoffeeMachine을 상속받은 형태가 된다. 상속을 구현.
	console.log(latteMachine);
	latteMachine.makeCoffee; // makeCoffe() 사용 가능
}
