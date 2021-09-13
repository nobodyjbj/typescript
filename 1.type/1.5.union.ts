{
	/**
	 * Union Types : OR 로 이해하면 충분하다.
	 * 활용도가 굉장히 높은 문법이다.
	 */
	type Direction = 'left' | 'right' | 'up' | 'down';
	function move(direction: Direction) {
		console.log(direction);
	}

	// 발생할 수 있는 케이스 중에 하나만 선택해서 사용하고 싶을때 적용
	move('left');
	move('right');
	move('up');
	move('right');

	type TileSize = 8 | 16 | 32;
	const tile: TileSize = 16;

	// function: login -> success, fail
	// 로그인을 했을때, 성공할 수도 있고 실패할 수도 있는 함수 예제
	type SuccessState = {
		response: {
			body: string;
		};
	};

	type FailState = {
		reason: string;
	};

	type LoginState = SuccessState | FailState;

	function login(): LoginState {
		return {
			response: {
				body: 'logged in!',
			},
		};
	}

	// printLoginState(state)
	// success -> 🎉 body
	// fail -> 😭 reason
	function printLoginState(state: LoginState): void {
		if ('response' in state) {
			console.log(`🎉 ${state.response.body}`);
		} else {
			console.log(`🎉 ${state.reason}`);
		}
	}
}
