{
	/**
	 * Partial Type : 기존의 타입 중에서 부분적인 타입만 허용하고 싶을때 사용한다.
	 * 그 대표적이 예제가 아래와 같다.
	 */
	type Todo = {
		title: string;
		description: string;
		label: string;
		priority: 'high' | 'low';
	};

	function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
		return {
			...todo, // 스레프레드 연산자(Spread Operator) : 배열, 객체를 복사 및 병합해서 사용할 수 있다.
			...fieldsToUpdate,
		};
	}

	const todo: Todo = {
		title: 'learn Typescript',
		description: 'Enjoy study',
		label: 'study',
		priority: 'high',
	};

	const result: Todo = updateTodo(todo, { priority: 'low' });
	console.log(result);
}
