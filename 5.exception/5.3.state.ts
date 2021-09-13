{
	/**
	 * 에러 상태
	 */

	type FailState = {
		result: 'fail';
		reason: 'offline' | 'down' | 'timeout';
	};

	type SuccessState = {
		result: 'success';
	};

	type ResultState = SuccessState | FailState;

	class NetworkClient {
		// 이렇게 에러상태를 작성하는 것이 좋다.
		tryConnect(): ResultState {
			throw new Error('no network!!');
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login(): void {
			this.client.tryConnect(); // 이곳에서 catch를 해도 처리 할 방법이 따로 없다. 무의미한 캐치는 안하는 것이 좋다.
		}
	}

	class App {
		constructor(private userService: UserService) {}

		run() {
			try {
				this.userService.login();
			} catch (e) {
				// show dialog to user
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
