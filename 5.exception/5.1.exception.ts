{
	/**
	 * Java : Exception
	 * JavaScript : Error
	 *
	 * Error Handling 3가지 단계
	 * try : 에러 발생할 수 있는 부분
	 * catch : 에러를 잡는 부분
	 * finally : 마무리 부분
	 */

	// ex1 )
	// const array = new Array(1000000000000000); // Error: Invalid array length
	// console.log(array);

	// ex2)
	/*
	type Direction = "up" | "down" | "left" | "right" | "he";
	function move(direction: Direction) {
		switch (direction) {
			case "up":
				position.x += 1;
				break;
			case "down":
				position.x -= 1;
				break;
			case "left":
				position.y += 1;
				break;
			case "right":
				position.y -= 1;
				break;
			// case "he":
			// 	position.y -= 1;
			// 	break;
			default:
				// 에러를 컴파일 단계에서 발견하게 코딩을 할 수도 있다.
				//const invalid: never = direction; // 'he'라는 case가 없기 때문에 컴파일 단계에서 에러가 발생한다.
				throw new Error(`unknown direction : ${direction}`);
		}
	}*/

	// ex3)
	function readFile(fileName: string): string {
		if (fileName === 'not exist!') {
			throw new Error(`file not exist! ${fileName}`);
		}

		return 'file contents';
	}

	function closeFile(fileName: string): void {
		//
	}

	const fileName = 'not exist!';
	try {
		console.log(readFile(fileName)); // file not exist! not exist!
	} catch (e) {
		console.log(`catched!!!`);
	} finally {
		// 성공하던 실패하던 항상 호출됨. 마무리해야하는 작업이 있다면 finally안에서 하는 것이 좋다.
		closeFile(fileName);
		console.log(`finally!!!`);
	}
}
