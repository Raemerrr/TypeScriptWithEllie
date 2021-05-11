{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7;
        coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enough coffee beans!`);
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                // 이름이 같다면 생략 가능 shots: shots,
                shots,
                hasMilk: false,
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const coffee = maker.makeCoffee(2);
    console.log(coffee);

    const maker2 = CoffeeMaker.makeMachine(3);
    console.log(maker2);
}