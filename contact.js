const regexName = RegExp("^[A-Z][a-zA-z]{2,}$");
const regexAddress = RegExp("^[\\w\\s/\\/]{4,}$");
const regexCityState = RegExp("^[\\w]{4,}$");
const regexZip = RegExp(`^[\\d]{3}[\\s]?[\\d]{3}$`);
const regexPhone = RegExp("[\\d]{10}");
const regxEmail = RegExp(`^[\\w]+(?:[_+-\\.][\\w]+)*@(?:[\\w]+){1}(?:\\.[a-z]{2,}){1,2}$`);

class Contact {
    constructor(...params) {
        this._firstName = params[0];
        this._lastName = params[1];
        this._address = params[2];
        this._city = params[3];
        this._state = params[4];
        this._zip = params[5];
        this._phone = params[6];
        this._email = params[7];
    }

    get firstName() { return this._firstName; }
    set firstName(firstName) {
        if (!regexName.test(firstName)) throw "Invalid Name! Should start with capital letter and minimum 3 letters required."
        {
            this._firstName = firstName;
        }
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        if (!regexName.test(lastName)) throw "Invalid Name! Should start with capital letter and minimum 3 letters required."
        {
            this._lastName = lastName;
        }
    }

    get address() { return this._address; }
    set address(address) {
        if (!regexAddress.test(address)) throw "Invalid Address! Should have minimum 4 characters required."
        {
            this._address = address;
        }
    }

    get city() { return this._city; }
    set city(city) {
        if (!regexCityState.test(city)) throw "Invalid City Name! Should have minimum 4 letters."
        {
            this._city = city;
        }
    }

    get state() { return this._state; }
    set state(state) {
        if (!regexCityState.test(state)) throw "Invalid State Name! Should have minimum 4 letters."
        {
            this._state = state;
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        if (!regexZip.test(zip)) throw "Invalid State Name! Should have minimum 4 letters."
        {
            this._zip = zip;
        }
    }

    get phone() { return this._phone; }
    set phone(phone) {
        if (!regexPhone.test(phone)) throw "Invalid Phone Number! Must contain 10 digits."
        {
            this._phone = phone;
        }
    }

    get email() { return this._email; }
    set email(email) {
        if (!regxEmail.test(email)) throw "Invalid Email Address!"
        {
            this._email = email;
        }
    }

    toString() {
        return `FirstName: ${this.firstName}\nLastName: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZip: ${this.zip}\nPhone: ${this.phone}\nEmail: ${this.email}\n`;
    }
};

export { Contact};