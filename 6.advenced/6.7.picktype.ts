{
	/**
	 * Pick Type : 기존의 타입에서 원하는 Property와 Value들만 뽑아서 사용하는 방법
	 */

	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};

	type VideoMetadata = Pick<Video, 'id' | 'title'>; // 재사용 가능하도록 타입으로 선언하고 사용하는 것이 좋다.

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
