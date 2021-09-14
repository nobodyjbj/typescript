{
	/**
	 * 예제, 읽을 수만 있는 타입을 생성해보자.
	 */
	type Todo = {
		title: string;
		description: string;
	};

	// 가변성의 타입을 제공하는 것은 위험한 일이다. 항상 불변성을 보장해야 한다.
	function display(todo: Todo) {
		todo.title = 'infinity challenge 🎉'; // 계속 변경할 수 있으므로 가변적이다. 불변하게 readonly를 만들어보자
	}

	// 흔하게 사용하는 Type들은 Utility Type이라는 것으로 TypeScript를 만든 개발자가 미리 생성해 두었다.
	// 아래 Readonly를 cmd + 좌클릭 하면 Utility Type 목록을 볼 수 있다.
	function display2(todo: Readonly<Todo>) {
		//todo.title = 'infinity challenge 🎉'; // readonly 가 되었다. 변경 x
	}
}
