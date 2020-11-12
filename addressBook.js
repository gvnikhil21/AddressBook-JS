import { Contact } from "./contact.js";
import * as validation from "./validation.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });

let addressbookArray = new Array();

let addContact = () => {
    let contact = new Contact();
    if (editOrAddContact(contact)) {
        let contactOne = addressbookArray.find(con => (con.firstName + con.lastName) == (contact.firstName + contact.lastName));
        if (contactOne == undefined) {
            addressbookArray.push(contact);
            console.log("\ncontact successfully added...");
        }
        else
            console.log("\ncontact with same name already exists...\n try adding with another name");
    }
    else
        console.log("\ncontact not added...");
};

let displayContacts = () => {
    if (addressbookArray.length != 0) {
        console.log("\nContacts: ");
        console.log(addressbookArray.toString());
    }
    else
        console.log("\nNo contacts to display!");
}

let findContactByName = () => {
    let firstName = prompt("Enter contact's  firstName: ");
    let lastName = prompt("Enter contact's lastName: ");
    let contact = addressbookArray.find(con => (con.firstName + con.lastName) == (firstName + lastName));
    if (contact != null || contact != undefined)
        console.log("\ncontact found!\n" + contact.toString());
    else
        console.log("No contact found!");
    return contact;
};

let editContactByName = () => {
    let contact = findContactByName();
    if (contact != undefined && editOrAddContact(contact)) {
        console.log("contacts edited successfully");
    }
};

let deleteContactByName = () => {
    let contact = findContactByName();
    if (contact != undefined) {
        addressbookArray = addressbookArray.filter(con => con != contact);
        console.log("contacts deleted successfully");
    }
}

let countContacts = () => {
    let count = addressbookArray.reduce(totalCount => totalCount += 1, 0);
    console.log("There are " + count + " contacts");
}

let searchContactByCity = () => {
    let city = prompt("Enter the name of the city: ");
    let firstName = prompt("Enter contact's first name: ");
    let lastName = prompt("Enter contact's last name: ");
    let contact = addressbookArray.filter(con => con.city == city).find(con => (con.firstName + con.lastName) == (firstName + lastName));
    if (contact != undefined) {
        console.log("\nContact found...");
        console.log(contact.toString());
    }
    else
        console.log("\ncontact not found");
}

let searchContactByState = () => {
    let state = prompt("Enter the name of the state: ");
    let firstName = prompt("Enter contact's first name: ");
    let lastName = prompt("Enter contact's last name: ");
    let contact = addressbookArray.filter(con => con.state == state).find(con => (con.firstName + con.lastName) == (firstName + lastName));
    if (contact != undefined) {
        console.log("\nContact found...");
        console.log(contact.toString());
    }
    else
        console.log("\ncontact not found");
}

let viewContactsByCity = () => {
    let city = prompt("Enter the name of city to get contacts: ");
    let cityContact = addressbookArray.filter(con => con.city == city);
    if (cityContact.length != 0) {
        console.log("\nContacts in " + city + " city: ");
        console.log("\n" + cityContact.toString());
    }
    else
        console.log("\nNo contacts found in " + city + " city");
}

let viewContactsByState = () => {
    let state = prompt("Enter the name of state to get contacts: ");
    let stateContact = addressbookArray.filter(con => con.state == state);
    if (stateContact.length != 0) {
        console.log("\nContacts in " + state + " state: ");
        console.log("\n" + stateContact.toString());
    }
    else
        console.log("\nNo contacts found in " + state + " state");
}

let countByCity = () => {
    let city = prompt("Enter the name of the city: ");
    let count = addressbookArray.filter(con => con.city == city).reduce(totalCount => totalCount += 1, 0);
    console.log("\nThere are " + count + " contacts in " + city + " city");
}

let countByState = () => {
    let state = prompt("Enter the name of the state: ");
    let count = addressbookArray.filter(con => con.state == state).reduce(totalCount => totalCount += 1, 0);
    console.log("\nThere are " + count + " contacts in " + state + " state");
}

let editOrAddContact = (contact) => {
    try {
        let firstName = prompt("Enter first name: ");
        validation.validateName(firstName);
        contact.firstName = firstName;
        let lastName = prompt("Enter last name: ");
        validation.validateName(lastName);
        contact.lastName = lastName;
        let address = prompt("Enter address: ");
        validation.validateAddress(address);
        contact.address = address;
        let city = prompt("Enter city: ");
        validation.validateCity(city);
        contact.city = city;
        let state = prompt("Enter state: ");
        validation.validateState(state);
        contact.state = state;
        let zip = prompt("Enter zip: ");
        validation.validateZip(zip);
        contact.zip = zip;
        let phone = prompt("Enter phone no.: ");
        validation.validatePhone(phone);
        contact.phone = phone;
        let email = prompt("Enter email-id: ");
        validation.validateEmail(email);
        contact.email = email;
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export { addContact, displayContacts, findContactByName, editContactByName, deleteContactByName, countContacts, 
    searchContactByCity, searchContactByState, viewContactsByCity, viewContactsByState, countByCity, countByState };