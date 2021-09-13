{
	/**
	 * Condition Type : 조건이 맞으면 어떤 타입을 선택할 수 있는 방법
	 */

	type Check<T> = T extends string ? boolean : number;
	type Type = Check<string>;

	// TypeScript api 문서 예제
	type TypeName<T> = T extends string
		? 'string'
		: T extends number
		? 'number'
		: T extends boolean
		? 'boolean'
		: T extends undefined
		? 'undefined'
		: T extends Function
		? 'function'
		: 'object';

	type Test1 = TypeName<string>; // 'string'
	type Test2 = TypeName<number>; // 'number'
	type Test3 = TypeName<Function>; // 'function'
}
