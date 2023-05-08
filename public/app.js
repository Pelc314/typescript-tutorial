import { Invoice } from './classes/Invoice.js'; // you have to import class from another file
const anchor = document.querySelector('a'); // not null asertion
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // nul safe call to anchor
// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form'); // type casting useful because ts doesn't know what is in HTML during developement.
// console.log(form.children)
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// this listens for the event (meaning when user clicks the add button)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // <-- this prevents the site from reloading
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
const invoiceOne = new Invoice('maciek', 'steamdeck', 2000);
const invoiceTwo = new Invoice('Konrad', 'Pixel', 800);
// It is possible to create arrays which only accept object of a certain class
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoiceOne.format());
console.log(invoiceTwo);
console.log(invoiceTwo);
console.log(invoices);
