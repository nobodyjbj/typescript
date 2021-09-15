{
	/**
	 * JavaScript의 this
	 *
	 * 다른 객체지향에서의 this는 객체 자신을 뜻한다.
	 * 하지만,
	 *
	 * JavaScript에서의 this는 호출을 누가 했냐에 따라 의미가 변한다. (어려운 이유이다.)
	 * 호출한 개체의 문맥을 나타내는 것이다.
	 *
	 * 글로벌에서 const 로 변수를 선언하면 window객체에 선언되지 않는다.
	 * 예외, var는 글로벌 선언이 된다. 그래서 명확하지 않는 동작으로 인해 가급적 사용을 피하는 것이 좋다.
	 * 다만, 함수는 글로벌 객체로 등록이 된다. 즉, 선언시 window객체에 등록이 된다.
	 */

	console.log(this);

	function simpleFunc() {
		console.log(this);
	}
	simpleFunc(); // 글로벌 함수이기 때문에 window가 나온다.

	class Counter {
		count = 0;
		increase = function () {
			console.log(this);
		};
	}
	const counter = new Counter(); // Counter가 this가 된다.
	counter.increase(); // Counter가 불렀기 때문이다.
	const caller = counter.increase; // window에 선언되지 않았기 때문에
	caller(); // undefined 가 된다.

	class Bob {}
	const bob = new Bob();
	bob.run = counter.increase;
	bob.run(); // Bob이 this가 된다. Bob이 불렀기 때문이다.

	// 변수선언을 해도 this를 가져오고 싶다면.. 아래와 같이 bind를 해준다.
	const test = counter.increase.bind(counter); // bind 처리를 해주었기 때문에
	test(); // Counter가 this가 된다.

	// 변수선언을 해도 this를 가져오고 싶다면.. Errow Function을 사용한다.
	class Counter2 {
		count = 0;
		// errow function 을 이용하면 선언될 당시의 this를 외부에서도 똑같은 형태로 호출한다.
		increase = () => {
			console.log(this);
		};
	}
	const counter2 = new Counter2(); // Counter가 this가 된다.
	counter2.increase(); // Counter가 불렀기 때문이다.
	const caller2 = counter2.increase; // window에 선언되지 않았기 때문에
	caller2(); // undefined 가 된다.
}
