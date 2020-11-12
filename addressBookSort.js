import * as addressBook from "./addressBook.js";

let sortByName = () => {
    let nameSortArray = sortContactByName();
    if (nameSortArray.length != 0) {
        console.log("\nSorted contacts by name: ");
        nameSortArray.forEach(con => console.log(con.toString()));
    }
    else
        console.log("No contacts added yet");
};

let sortContactByName = () => {
    return addressBook.getAddressBookArray().sort((a, b) => {
        return (((a.firstName + a.lastName) < (b.firstName + b.lastName)) ? -1 : 1)
    });
};

let sortByCity = () => {
    let citySortArray = sortContactByCity();
    if (citySortArray.length != 0) {
        console.log("\nSorted contacts by city: ");
        citySortArray.forEach(con => console.log(con.toString()));
    }
    else
        console.log("No contacts added yet");
};

let sortContactByCity = () => {
    return addressBook.getAddressBookArray().sort((a, b) => {
        return (a.city < b.city ? -1 : 1)
    });
};

let sortByState = () => {
    let stateSortArray = sortContactByState();
    if (stateSortArray.length != 0) {
        console.log("\nSorted contacts by state: ");
        stateSortArray.forEach(con => console.log(con.toString()));
    }
    else
        console.log("No contacts added yet");
};

let sortContactByState = () => {
    return addressBook.getAddressBookArray().sort((a, b) => {
        return (a.state < b.state ? -1 : 1)
    });
};

let sortByZip = () => {
    let zipSortArray = sortContactByZip();
    if (zipSortArray.length != 0) {
        console.log("\nSorted contacts by zip: ");
        zipSortArray.forEach(con => console.log(con.toString()));
    }
    else
        console.log("No contacts added yet");
};

let sortContactByZip = () => {
    return addressBook.getAddressBookArray().sort((a, b) => {
        return (a.zip - b.zip)
    });
};

export { sortByName, sortByCity, sortByState, sortByZip };