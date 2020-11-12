const regexName = RegExp("^[A-Z][a-zA-z]{2,}$");
const regexAddress = RegExp("^[\\w\\s/\\/]{4,}$");
const regexCityState = RegExp("^[\\w]{4,}$");
const regexZip = RegExp(`^[\\d]{3}[\\s]?[\\d]{3}$`);
const regexPhone = RegExp("[\\d]{10}");
const regxEmail = RegExp(`^[\\w]+(?:[_+-\\.][\\w]+)*@(?:[\\w]+){1}(?:\\.[a-z]{2,}){1,2}$`);

let successMessage;
let errorMessage;
let validateName = (name) => {
    successMessage = "valid name.";
    errorMessage = "Invalid Name! Should start with capital letter and minimum 3 letters required.";
    validate(regexName, name, successMessage, errorMessage);
};

let validateAddress = (address) => {
    successMessage = "valid address.";
    errorMessage = "Invalid Address! Should have minimum 4 characters required.";
    validate(regexAddress, address, successMessage, errorMessage);
};

let validateCity = (city) => {
    successMessage = "valid city name.";
    errorMessage = "Invalid City Name! Should have minimum 4 letters.";
    validate(regexCityState, city, successMessage, errorMessage);
};

let validateState = (state) => {
    successMessage = "valid state name.";
    errorMessage = "Invalid State Name! Should have minimum 4 letters.";
    validate(regexCityState, state, successMessage, errorMessage);
};

let validateZip = (zip) => {
    successMessage = "valid zip code.";
    errorMessage = "Invalid Zip Code! Must contain 6 digit code.";
    validate(regexZip, zip, successMessage, errorMessage);
};

let validatePhone = (phone) => {
    successMessage = "valid phone number.";
    errorMessage = "Invalid Phone Number! Must contain 10 digits.";
    validate(regexPhone, phone, successMessage, errorMessage);
};

let validateEmail = (email) => {
    successMessage = "valid email address.";
    errorMessage = "Invalid Email Address!";
    validate(regxEmail, email, successMessage, errorMessage);
};

// common method for validation
let validate = (regex, property, successMessage, errorMessage) => {
    if (regex.test(property))
        console.log(successMessage);
    else
        throw errorMessage;
}
export { validateName, validateAddress, validateCity, validateState, validateZip, validatePhone, validateEmail };