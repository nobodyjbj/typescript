{
    // // JavaScript 👎
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // // TypeScript
    // function tsAdd(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // JavaScript 👎
    // function jsFetchNum(id) {
    //     // code ..
    //     // code ..
    //     // code ..
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // // TypeScript
    // function tsFetchNum(id: string): Promise<number> {
    //     // code ..
    //     // code ..
    //     // code ..
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // 함수 활용 팁!
    // JavaScript의 최신 문법은 당연히 TypeScript에서도 사용할 수 있다.

    // Optional parameter
    function printName(firstName: string, lastName?: string) { // 물음표가 붇으면 전달 될 수도 있고 전달 하지 않을 수도 있다.
        console.log(firstName);
        console.log(lastName);
    }

    printName('moon', 'sun');
    printName('jupiter');
    printName('earth', undefined);

    // default parameter
    function printMessage(messege: string = 'default message') { // 디폴트 메세지를 정할 수 있다.
        console.log(messege);
    }
    printMessage(); // 전달하지 않아도 기본값이 출력

    // Rest parameter
    function addNumber(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumber(1, 2));
    console.log(addNumber(1, 2, 3));
    console.log(addNumber(1, 2, 3, 4));
    console.log(addNumber(1, 2, 3, 4, 5));
}