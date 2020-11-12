import * as addressBook from "./addressBook.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ sigint: true });


let sortByName = () => {
    let nameSortArray = sortContactByName();
    console.log("\nSorted contacts by name: ");
    nameSortArray.forEach(con => console.log(con.toString()));
}

let sortContactByName = () => {
    return addressBook.getAddressBookArray().sort((a, b) => {
        return (((a.firstName + a.lastName) < (b.firstName + b.lastName)) ? -1 : 1)
    });
}

export { sortByName };