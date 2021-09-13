{
	/**
	 * Type과 Interface 비교 : 버전마다 다름
	 * ⭐️ : 둘다 사용 가능
	 * 🎃 : 둘 중에 하나만 사용 가능
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
		x: number = 1;
		y: number = 1;
	}

	class Position2 implements PositionInterface {
		x: number = 1;
		y: number = 1;
		z: number = 1;
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
	//type PositionType { z: number } // 불가능

	// Type aliases can use computed properties
	type Person = {
		name: string;
		age: number;
	};
	type Name = Person['name']; // string
	type NumberType = number;
	type Direction = 'left' | 'right' | 'up' | 'down';
}
