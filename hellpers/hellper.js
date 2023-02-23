const phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
const validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no without the country code.
const minDigitsInIPhoneNumber = 7;


function trim(s) {
    let i;
    let returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++) {
        // Check that current character isn't whitespace.
        const c = s.charAt(i);
        if (c !== " ") {
            returnString += c;
        }
    }
    return returnString;
}

function stripCharsInBag(s, bag) {
    let i;
    let returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        // Check that current character isn't whitespace.
        const c = s.charAt(i);
        if (bag.indexOf(c) === -1) {
            returnString += c;
        }
    }
    return returnString;
}

function isInteger(s) {
    let i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        const c = s.charAt(i);
        if (c < "0" || c > "9") {
            return false;
        }
    }
    // All characters are numbers.
    return true;
}

export function checkInternationalPhone(strPhone) {
    let bracket = 3;

    strPhone = trim(strPhone);

    if (strPhone.indexOf("+") > 1) {
        return false;
    }

    if (strPhone.indexOf("-") !== -1) {
        bracket = bracket + 1;
    }

    if (strPhone.indexOf("(") !== -1 && strPhone.indexOf("(") > bracket) {
        return false;
    }

    const brchr = strPhone.indexOf("(");

    if (strPhone.indexOf("(") !== -1 && strPhone.charAt(brchr + 2) !== ")") {
        return false;
    }

    if (strPhone.indexOf("(") === -1 && strPhone.indexOf(")") !== -1) {
        return false;
    }

    const s = stripCharsInBag(strPhone, validWorldPhoneChars);
    return isInteger(s) && s.length >= minDigitsInIPhoneNumber;
}