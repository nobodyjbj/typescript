{
	/**
	 * Enum: 상수를 한 곳에 모아서 선언 할 수 있는 타입, 타입스크립트 자체 제공 타입
	 * 대부분은 Union을 사용하지만, 다른 모바일 네이티브 언어로 데이터를 전이시킬때는 ENUM을 사용할 수도 있다.
	 */

	// JavaScript
	const MAX_NUM = 100;
	const MAX_STUDENT_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// TypeScript
	// 가능한한 사용하지 않는 것이 좋다.
	// enum으로 할당된 변수에 어떤 값이라도 대입이 가능하다는 것이다.
	enum Days {
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Tuesday);
	let day = Days.Saturday;
	day = 414123; // 컴파일 에러가 없다. 이렇게 때문에 사용하면 안된다. 타입보장 x
	console.log(day);

	// enum 보다 union을 사용하는 것이 좋은 방법이다.
	type DaysOfWeek =
		| 'Monday'
		| 'Tuesday'
		| 'Wednesday'
		| 'Thursday'
		| 'Friday'
		| 'Saturday'
		| 'Sunday';
	let dayOfweek: DaysOfWeek = 'Friday';
	// dayOfweek = 'test'; // 컴파일 에러 발생
}
