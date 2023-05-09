// Classes
export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} pounds for ${this.details}`;
    }
}
// this constructor only works with access modifiers.
class AnotherInvoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes pounds ${this.amount} for ${this.details}`;
    }
}
