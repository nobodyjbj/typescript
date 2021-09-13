{
	/**
	 * Type Assertions : 타입을 확인하거나 강요할때 사용
	 * 좋은 방법이 아니고, 피하는 것이 좋다.
	 */
	function jsStrFunc(): any {
		return 'hello';
	}
	const result = jsStrFunc();
	console.log((result as string).length);

	function jsNumFunc(): any {
		return 7;
	}
	const reuslt2 = jsNumFunc();
	console.log((reuslt2 as string).length); // 에러나 경고메시지가 없다. undefined출력
	console.log((<string>reuslt2).length); // 타입 케스팅을 할 수 있는 또 하나의 방법

	const worng: any = 5;
	console.log((worng as Array<number>).push(1)); // 컴파일 에러는 없지만 빌드할때 에러가 난다.

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	numbers!.push(2); // 느낌표를 붙이면 무조건 널이 아니다. 라고 장담할때 사용

	const button = document.querySelector('class')!; // 100% 존재한다고 생각할때 사용.
}
