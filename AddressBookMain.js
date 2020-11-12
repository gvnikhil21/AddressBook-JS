import * as addressBook from "./addressBook.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });

let choice = 0;
do {
    console.log("\n1. Add Contact\n2. Display contacts\n3. Find Contact By Name\n4. Edit Contact By Name\n5. Exit");
    choice = Number(prompt("Enter your choice number: "));
    switch (choice) {
        case 1:
            addressBook.addContact();
            break;
        case 2:
            addressBook.displayContacts();
            break;
        case 3:
            addressBook.findContactByName();
            break;
        case 4:
            addressBook.editContactByName();
            break;
        case 5:
            console.log("Thank you! You have now quit the program.");
            break;
        default:
            console.log("Invalid Choice! Enter proper choice number");
            break;
    }
} while (choice != 5);