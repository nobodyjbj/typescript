{
	/**
	 * Discriminated Union
	 * Union 타입에 차별화되는 이름이 동일한 타입을 둠으로써 간편하게 구분할 수 있는 것
	 * 조금 더 직관적인 코드를 작성할 수 있다.
	 */
	type SuccessState = {
		result: 'success'; // 공통 프로퍼티
		response: {
			body: string;
		};
	};

	type FailState = {
		result: 'fail'; // 공통 프로퍼티
		reason: string;
	};

	type LoginState = SuccessState | FailState;

	function login(): LoginState {
		return {
			result: 'success',
			response: {
				body: 'logged in!',
			},
		};
	}

	function printLoginState(state: LoginState): void {
		if (state.result === 'success') {
			// success or fail
			console.log(`🎉 ${state.response.body}`);
		} else {
			console.log(`🎉 ${state.reason}`);
		}
	}
}
