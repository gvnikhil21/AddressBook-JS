import { Contact } from "./contact.js";
import * as validation from "./validation.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });

try {
    let firstName = prompt("Enter first name: ");
    validation.validateName(firstName);
    let lastName = prompt("Enter last name: ");
    validation.validateName(lastName);
    let address = prompt("Enter address: ");
    validation.validateAddress(address);
    let city = prompt("Enter city: ");
    validation.validateCity(city);
    let state = prompt("Enter state: ");
    validation.validateState(state);
    let zip = prompt("Enter zip: ");
    validation.validateZip(zip);
    let phone = prompt("Enter phone no.: ");
    validation.validatePhone(phone);
    let email = prompt("Enter email-id: ");
    validation.validateEmail(email);
    let contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    console.log("\ncontact successfully added...");
    console.log(contact.toString());
} catch (error) {
    console.error(error);
}