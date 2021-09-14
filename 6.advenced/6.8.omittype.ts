{
	/**
	 * Omit Type : 기존의 타입에서 원하는 Property와 Value들을 빼고 사용하는 방법
	 */

	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};

	type VideoMetadata = Omit<Video, 'url' | 'data'>;
	// Omit을 열어보면 Exclude라는 타입을 사용하는데 제외한다는 뜻이다. Exclude타입을 열어보면 이제 이해 할 수 있다.

	function getVideo(id: string): Video {
		return {
			id: '1',
			title: 'basketball tranning',
			url: 'htts://...',
			data: 'byte-data...',
		};
	}

	function getVideoMetadata(id: string): VideoMetadata {
		return {
			id: '1',
			title: 'basketball tranning',
		};
	}
}
