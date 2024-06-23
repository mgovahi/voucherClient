import ipRegex from "ip-regex";

export const validateNationalCode = (code) => {
  if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return false;

  let sum = 0,
    chars = code.split(""),
    lastDigit,
    remainder;

  for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

  remainder = sum % 11;
  lastDigit = remainder < 2 ? remainder : 11 - remainder;

  return +chars[9] === lastDigit;
};

export const validatePostalCode = (p) => {
  return /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gm.test(p);
};

const iso7064Mod97_10 = (iban) => {
  var remainder = iban,
    block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
};

export const isValidIranianIban = (str) => {
  var pattern = /^(IR)?\d{24}$/;
  if (str.length == 24) {
    str = "IR" + str;
  }

  if (str.length !== 26) {
    return false;
  }

  if (!pattern.test(str)) {
    return false;
  }

  var newStr = str.substr(4);
  var d1 = str.charCodeAt(0) - 65 + 10;
  var d2 = str.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + str.substr(2, 2);

  var remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }

  const bankCode = str.substr(4, 3);
  const validBankCodes = [
    "055",
    "054",
    "057",
    "021",
    "018",
    "051",
    "020",
    "013",
    "056",
    "015",
    "058",
    "019",
    "011",
    "053",
    "016",
    "010",
    "014",
    "012",
    "017",
    "075",
    "051",
    "064",
    "052",
    "070",
    "062",
    "069",
    "063",
    "022",
    "065",
    "078",
    "066",
    "059",
    "061",
    "011",
    "060",
  ];

  if (!validBankCodes.includes(bankCode)) {
    return false;
  }

  return true;
};

export const isValidIranianShetabCardNumber = (code) => {
  var l = code.length;
  if (
    l < 16 ||
    parseInt(code.substr(1, 10), 10) == 0 ||
    parseInt(code.substr(10, 6), 10) == 0
  )
    return false;
  var c = parseInt(code.substr(15, 1), 10);
  var s = 0;
  var k, d;
  for (var i = 0; i < 16; i++) {
    k = i % 2 == 0 ? 2 : 1;
    d = parseInt(code.substr(i, 1), 10) * k;
    s += d > 9 ? d - 9 : d;
  }
  return s % 10 == 0;
};

export const isValidIranianNationalCode = (code) => {
  if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return false;

  let sum = 0,
    chars = code.split(""),
    lastDigit,
    remainder;

  for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

  remainder = sum % 11;
  lastDigit = remainder < 2 ? remainder : 11 - remainder;

  return +chars[9] === lastDigit;
};

export const isValidIranianLegalNationalCode = (code) => {
  var l = code.length;
  if (l < 11 || parseInt(code, 10) == 0) return false;
  if (parseInt(code.substr(3, 6), 10) == 0) return false;
  var c = parseInt(code.substr(10, 1), 10);
  var d = parseInt(code.substr(9, 1), 10) + 2;
  var z = new Array(29, 27, 23, 19, 17);
  var s = 0;
  for (var i = 0; i < 10; i++)
    s += (d + parseInt(code.substr(i, 1), 10)) * z[i % 5];
  s = s % 11;
  if (s == 10) s = 0;
  return c == s;
};

export const onKeyNumber = (event) => {
  if (!/^[\d]+$/.test(event.key)) {
    event.preventDefault();
  }
};

export const isValidIP = (ip) => {
  // Regular expression to check if string is a IP address
  //const ipValidation = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const result = ipRegex({ includeBoundaries: true }).test(ip);
  return result;
};

export const isValidEmail = (email) => {
  const emailValidation = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/;
  const result = emailValidation.test(email)
  return result;
};

export const isValidURL = (url) => {
  const urlValidator = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
  const result = urlValidator.test(url)
  return result;
};

export const urlValidatorPattern = /^(www\.)?[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^-\s]{2,}$/g;
