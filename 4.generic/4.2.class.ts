{
	/**
	 * Class 레벨에서의 Generic 활용
	 */

	// either: a or b
	interface Either<L, R> {
		left: () => L;
		right: () => R;
	}

	class SimpleEither<L, R> implements Either<L, R> {
		constructor(private leftValue: L, private rightValue: R) {}

		left(): L {
			return this.leftValue;
		}

		right(): R {
			return this.rightValue;
		}
	}

	const either: Either<number, number> = new SimpleEither(4, 5);
	either.left(); // 4
	either.right(); // 5

	const either2: Either<String, number> = new SimpleEither('TEST', 5);
	either2.left(); // TEST
	either2.right(); // 5

	const either3: Either<String, Object> = new SimpleEither('TEST', {
		num: 1,
		value: 'TEST',
	});
	console.log(either3.right());
	either3.left(); // TEST
	either3.right(); // { num: 1, value: 'TEST' }
}
