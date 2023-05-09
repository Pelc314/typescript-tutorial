import { Invoice } from './classes/Invoice.js'; // you have to import class from another file
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne; // this variable must implement that interface
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250); // here it can be created even when that variable implements HasFormatter because invoice class implements also HasFormatter
docTwo = new Payment('mario', 'plumbing', 500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// docs.push('lol') you cannot add string when it doesn't implement HasFormatter
const me = {
    name: 'shaun',
    age: 12,
    speak: function (text) {
        // speaks
    },
    spend: function (money) {
        // spends money
        return money;
    }
};
// DOM operations
const anchor = document.querySelector('a'); // not null asertion
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // nul safe call to anchor
// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form'); // type casting useful because ts doesn't know what is in HTML during developement.
// console.log(form.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// this listens for the event (meaning when user clicks the add button)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // <-- this prevents the site from reloading
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber); // <-- we assign values from the form into which user inputs data to Invoice instance
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber,
    //     doc
    // )
});
const invoiceOne = new Invoice('maciek', 'steamdeck', 2000);
const invoiceTwo = new Invoice('Konrad', 'Pixel', 800);
// It is possible to create arrays which only accept object of a certain class
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoiceOne.format());
console.log(invoiceTwo.client);
console.log(invoiceTwo);
console.log(invoices);
console.log(window.Error);
