class HelloWorld {
    private readonly who: string;
    constructor() {
        this.who = 'world';
    }

    hello = () => {
        console.log(`Hello ${this.who}`);
    };
}
