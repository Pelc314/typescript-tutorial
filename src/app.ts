import { Invoice } from './classes/Invoice.js' // you have to import class from another file
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

let docOne: HasFormatter // this variable must implement that interface
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 250) // here it can be created even when that variable implements HasFormatter because invoice class implements also HasFormatter
docTwo = new Payment('mario', 'plumbing', 500)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)
// docs.push('lol') you cannot add string when it doesn't implement HasFormatter

const me: IsPerson = {
    name: 'shaun',
    age: 12,
    speak: function (text: string) {
        // speaks
    },
    spend: function (money: number) {
        // spends money
        return money
    }
}

// DOM operations
const anchor = document.querySelector('a')! // not null asertion

console.log(anchor?.href) // nul safe call to anchor

// const form = document.querySelector('form')

const form = document.querySelector('.new-item-form') as HTMLFormElement // type casting useful because ts doesn't know what is in HTML during developement.

// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

// this listens for the event (meaning when user clicks the add button)
form.addEventListener('submit', (e: Event) => {
    e.preventDefault() // <-- this prevents the site from reloading

    let doc: HasFormatter
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber) // <-- we assign values from the form into which user inputs data to Invoice instance
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber,
    //     doc
    // )
})

const invoiceOne = new Invoice('maciek', 'steamdeck', 2000)
const invoiceTwo = new Invoice('Konrad', 'Pixel', 800)

// It is possible to create arrays which only accept object of a certain class
let invoices: Invoice[] = []

invoices.push(invoiceOne)
invoices.push(invoiceTwo)

// console.log(invoiceOne.format())
// console.log(invoiceTwo.client)
// console.log(invoiceTwo)
// console.log(invoices)
// console.log(window.Error)

// ENUMS

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

interface Resource<T> {
    uid: number
    resourceType: ResourceType
    data: T
}

const firstRecource: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.BOOK,
    data: { name: ' mario' }
}

