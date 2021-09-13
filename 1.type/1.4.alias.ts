{
	/**
	 * Type Aliases, TypeScript의 꽃🌸
	 * 새로운 타입을 정의 할 수 있다.
	 * 원시타입, 오브젝트, 실제 값을 타입으로 정의할 수 있다.
	 */
	type Text = string; // 타입 선언
	const name: Text = 'june'; // 텍스트 타입으로 변수 선언
	type Num = number;
	const age: Text = '20';

	type Student = {
		// 객체 타입 선언
		name: string;
		age: number;
	};
	const student: Student = {
		// 객체 타입으로 변수 선언
		name: 'Test',
		age: 10,
	};

	/**
	 * String Literal Types
	 */
	type Name = 'name';
	let juneName: Name;
	juneName = 'name';
	type Json = 'json';
	const json: Json = 'json';

	type Boal = true;
	const isCat: Boal = true;
}
