import { Contact } from "./contact.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let address = prompt("Enter address: ");
let city = prompt("Enter city: ");
let state = prompt("Enter state: ");
let zip = prompt("Enter zip: ");
let phone = prompt("Enter phone no.: ");
let email = prompt("Enter email-id: ");

// creates contact
let contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
console.log(contact.toString());