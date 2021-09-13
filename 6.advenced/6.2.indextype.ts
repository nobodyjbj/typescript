{
	/**
	 * Type을 유기적으로 사용하는 예제
	 */
	const obj = {
		name: 'june',
	};
	obj.name; // june
	obj['name']; // june

	type Animal = {
		name: string;
		age: number;
		gender: 'male' | 'female';
	};

	type Name = Animal['name']; // string
	const text: Name = 'text';

	type Gender = Animal['gender']; // 'male' | 'female'

	type Keys = keyof Animal;
	const key: Keys = 'gender';

	type Person = {
		name: string;
		gender: Animal['gender'];
	};

	const person: Person = {
		name: 'june',
		gender: 'male',
	};
}
