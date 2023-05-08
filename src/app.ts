const anchor = document.querySelector('a')! // not null asertion

console.log(anchor?.href) // nul safe call to anchor

// const form = document.querySelector('form')

const form = document.querySelector('.new-item-form') as HTMLFormElement // type casting useful because ts doesn't know what is in HTML during developement.

// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// this listens for the event (meaning when user clicks the add button)
form.addEventListener('submit', (e: Event) => {
    e.preventDefault() // <-- this prevents the site from reloading
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    )
})

// Classes

class Invoice {
    readonly client: string;
    public details: string;
    private amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes pounds ${this.amount} for ${this.details}`
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

const invoiceOne = new Invoice('maciek', 'steamdeck', 2000)
const invoiceTwo = new Invoice('Konrad', 'Pixel', 800)

// It is possible to create arrays which only accept object of a certain class
let invoices: Invoice[] = []

invoices.push(invoiceOne)
invoices.push(invoiceTwo)

console.log(invoiceOne.format())
console.log(invoiceTwo)
console.log(invoiceTwo)
console.log(invoices)