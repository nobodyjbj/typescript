{
	/**
	 * Record Type : 맵과 비슷하게 하나와 어떤 하나를 키와 타입으로 묶고싶을때 사용하는 방법
	 */
	type PageInfo = {
		title: string;
	};

	type Page = 'home' | 'about' | 'contact';

	const nav: Record<Page, PageInfo> = {
		// 한 Page당 PageInfo를 할당할 수 있다.
		home: { title: 'Home' },
		about: { title: 'About' },
		contact: { title: 'Contact' },
	};
}
