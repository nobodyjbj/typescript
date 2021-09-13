{
	/**
	 * Generic을 활용한 아무타입이 매개변수도 받을 수 있도록 하는 예제
	 */

	// bad 예제
	function checkNotNullBadExample(args: number | null): number {
		if (args == null) {
			throw new Error('not valid number!');
		}

		return args;
	}

	// 타입에 대해 안전하지 않은 예제, any사용 x
	function checkNotNullAnyBadExample(args: any | null): any {
		if (args == null) {
			throw new Error('not valid number!');
		}

		return args;
	}

	// Generic활용 예제
	function checkNotNull<T>(args: T | null): T {
		if (args == null) {
			throw new Error('not valid number!');
		}

		return args;
	}

	const num: number = checkNotNull(123); // 선언 당시에 타입이 정해진다.
	const boal: boolean = checkNotNull(true);
}
