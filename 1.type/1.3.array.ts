{
	// Array
	const fruits: string[] = ['🍎', '🍌'];
	const scores: Array<number> = [1, 2, 3];

	function printArray(fruit: readonly string[]) {
		// readonly 를 붙여주면 배열을 변경할 수 없다.
		// 객체의 불변성을 보장
		// fruit.push(); // 변경 x
	}

	// Tuple : 배열이긴 배열인데 원소마다 다른 속성을 가질 수 있는 배열
	// 사용을 권장하지 않는다. 인덱스로 접근하기때문에 가독성이 떨어진다.
	// tuple -> interface, type alias, class로 대체해서 사용하는 것이 좋다.
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
	const [name, age] = student;
}
