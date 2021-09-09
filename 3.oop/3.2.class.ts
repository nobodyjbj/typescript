{
    /**
     * Class -> Object
     * 클래스는 틀을 만드는 작업이다.
     * 클래스는 멤버변수(property or fields)와 method(Behavior)로 구성한다.
     * 
     * TypeScript에도 기본 생성자를 꼭 생성해줘야 한다.
     * Static method로 객체를 생성하는 방법도 가능하다.(자바에서는 정적 팩터리 메서드 패턴이라고 한다.)
     */

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeeMaker(32);
    maker.makeCoffee(3);
    console.log(maker);

    const maker2 = CoffeeMaker.makeMachine(32);
    console.log(maker2);
}