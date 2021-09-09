{
    // JavaScript
    // old : var , var 는 사용하지 않는 것이다.
    var age = 5;
    age = 6;

    // let : 변수를 할당한 후 수정 할 수 있음
    let name = 'hello';
    name = 'hi';

    // const : 변수 할당 후 수정할 수 없음
    const age2 = 5;

    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint. symbol, null, undefined
     * Object: function, array...
     */

    // number
    // const num:number = 'd'; // Error : Type 'string' is not assignable to type 'number'
    const num: number = 1;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined: 값이 비어 있는지 안비어있는지 아무것도 결정되지 않은 상태
    let undeName: undefined; // 이러한 선언 방식은 없음
    let undeAge: number | undefined;  // 두 가지 타입을 모두 담을 수 있도록 선언
    undeAge = undefined;
    undeAge = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null: 값이 명확히 비어있는 상태
    let person: null;
    let person2: string | null; // 이러한 형태는 보통 undefined를 사용한다.

    // unknown : 👎 어떤 타입인지 알 수 없는 상태, 타입이 없는 자바스크립트와 연동할 경우에 자바스크립트에서 리턴하는 경우 타입을 모를때 사용할 수 있다.
    // 왠만하면 사용하지 않는 것이 좋다.
    let notSure: unknown;
    notSure = 'he';
    notSure = 'true';

    // any : 👎 가능하면 사용하지 않는 것이 좋다. 타입을 알 수 없을때 사용한다.
    let anything: any = 0;
    anything = 'hello';

    // void : 함수에서 아무것도 리턴하지 않을때 타입. 생략가능
    function print(): void {
        console.log('hello');
        return;
    }

    // 변수에서는 사용하지 않는다.
    let unsable: void = undefined;

    // never: 어플리케이션에서 어떠한 에러를 던질때나 리턴할 수 없을때 다룬다.
    // 당연히 변수에는 사용할 수 없다.
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);
        // while (true) { } // 이렇게 리턴되지 않은경우 사용
    }

    // Object : 👎 어떤 타입이던 선언 가능하다.
    let obj: object;
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({ name: 'june' });
    acceptSomeObject({ name: 'dog' });
}