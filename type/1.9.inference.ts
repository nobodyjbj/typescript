{
    /**
     * Type Inference: 타입 추론
     * 타입추론은 되도록 사용하지 않고, 타입을 명시적으로 적어주는 것이 좋다.
     */
    let text = 'hello'; // 선언함과 동시에 string값을 주었기 때문에 string 형으로 변수가 생성된다.
    
    function print(message: string) { // 타입을 정해주지 않으면, Parameter 'message' implicitly has an 'any' type.
        console.log(message);
    }

    function add(x: number, y: number) { //  리턴 타입이 없어도, 입력받은 값이 number이기 때문에 타입추론 되어서 컴파일 에러가 없다.
        return x + y;
    }
    const result = add(1, 2); // add()의 리턴 타입이 number이기때문에 result변수도 타입추론되어 number로 선언되었다.
}