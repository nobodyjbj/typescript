{
	/**
	 * Map Type : 기존에 있는 타입을 이용하면서 다른 형태의 타입으로 변환하는 방법
	 */

	type Video = {
		title: string;
		author: string;
	};

	// 타입의 형태가 변경이 될때 재사용성을 높이기 위한 것이 mapType 이다. 아래 코드는 bad..
	// type VideoOptional = {
	// 	title?: string;
	// 	author?: string;
	// 	description?: string;
	// };

	// type VideoReadOnly = {
	// 	readonly title: string;
	// 	readonly author: string;
	// 	readonly description: string;
	// };

	// 인덱스란? [] 기호를 말한다.
	// 배열, map을 사용하여 원소를 변경하였는데 이때 사용한 map을 type에 도입
	[1, 2].map((item) => item * item); // [1, 4]

	type Optional<T> = {
		// for ... in (반복문) 처럼 T를 검색
		[P in keyof T]?: T[P]; // P(property)는 T(type)타입의 모든 키들 중의 하나!, T안에 있는 P에 해당하는 value가 type이 된다.
	};

	type VideoOptional = Optional<Video>;

	type Animal = {
		name: string;
		age: number;
	};
	const animal: Optional<Animal> = {
		age: 1,
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};

	const readOnlyVideo: ReadOnly<Video> = {
		title: 'imposible to change.',
		author: 'read',
	};
	// readOnlyVideo.author = 'test'; // error content : Cannot assign to 'author' because it is a read-only property.

	type Nullable<T> = {
		[P in keyof T]: T[P] | null; // key가 있거나 null을 허용
	};
	const obj2: Nullable<Video> = {
		title: null,
		author: null,
	};

	// TypeScript api 문서 예제
	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};
	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
