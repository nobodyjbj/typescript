{
	/**
	 * Type과 Interface 비교 : 버전마다 다름
	 * ⭐️ : 둘다 사용 가능
	 * 🎃 : 둘 중에 하나만 사용 가능
	 *
	 * Interface의 정의 : 어떤 것의 규격사항, 서로 간의 약속을 지켜야 할 때 사용한는 것
	 * Type의 정의 : 어떠한 데이터를 담을때 사용, 데이터의 모습, 타입을 정의하는 것
	 *
	 * Interface와 Type 이 헷갈리는 이유는 데이터를 담을 모습을 강제하기위한 관점과 기능의 관점으로만 바라봐서 헷갈리는 것이다.
	 * 각가의 영어단어에 대해 이해하고 상황에 맞게 사용하는 연습이 필요하다.
	 * 왜냐하면, java에서의 Interface가 TypeScript의 Interface와 다른 개념이라고 생가하지 않는다.
	 * 누군가에게 설명할때 TypeScript의 Interface 역할은 Type이라고도 있어 -> 이렇게 이해하면 틀린말이다.
	 * Type 은 데이터의 형태이지 상호간의 메세지를 주고 받을 수 있는 규약의 관점이 아니기 때문이다.
	 * 물론, Type의 기능에서 Interface처럼 사용할 수 있는 기능이 있다. 기능상 가능하다고해서 이렇게 사용의 관점으로만 설계 및 코딩을 하면 좋은 방법이 아니라는 이야기다.
	 */
	type PositionType = {
		x: number;
		y: number;
	};
	interface PositionInterface {
		x: number;
		y: number;
	}

	// object ⭐️
	const obj1: PositionType = {
		x: 1,
		y: 1,
	};
	const obj2: PositionInterface = {
		x: 1,
		y: 1,
		z: 1,
	};

	// class ⭐️
	class Position1 implements PositionType {
		x = 1;
		y = 1;
	}

	class Position2 implements PositionInterface {
		x = 1;
		y = 1;
		z = 1;
	}

	// Extends ⭐️
	type ZPositionType = PositionType & { z: number };
	interface ZPositionInterface extends PositionInterface {
		z: number;
	}

	// only interface can be merged. 🎃
	// 동일한 이름의 인터페이스 추가 가능
	interface PositionInterface {
		z: number;
	}
	// type 은 불가능
	// type PositionType { z: number } // 불가능

	// Type aliases can use computed properties
	type Person = {
		name: string;
		age: number;
	};
	type Name = Person['name']; // string
	type NumberType = number;
	type Direction = 'left' | 'right' | 'up' | 'down';
}
