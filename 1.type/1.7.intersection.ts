{
	/**
	 * Intersection Types: AND로 이해하면 충분하다.
	 */
	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		emplyeeId: number;
		work: () => void;
	};

	function interWork(person: Student & Worker) {
		console.log(person.name, person.score, person.emplyeeId, person.work());
	}

	interWork({
		name: 'june',
		score: 100,
		emplyeeId: 1111,
		work: () => {},
	});
}
