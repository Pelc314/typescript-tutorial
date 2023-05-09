import { HasFormatter } from "../interfaces/HasFormatter";

// Classes

export class Invoice implements HasFormatter { // export allows the class to be used in a different file, implements uses the imported interface
    readonly client: string;
    public details: string;
    private amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes ${this.amount} pounds for ${this.details}`
    }
}

// this constructor only works with access modifiers.
class AnotherInvoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }
    format() {
        return `${this.client} owes pounds ${this.amount} for ${this.details}`
    }
}