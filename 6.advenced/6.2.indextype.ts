{
	/**
	 * Index Type : 타입도 인덱스를 기반으로 해서 접근할 수 있다.
	 */
	const obj = {
		name: 'june',
	};
	obj.name; // june
	obj['name']; // june -> 인덱스로 접근

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
