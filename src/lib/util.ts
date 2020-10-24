import lzString from 'lz-string';

export function compressToEncodedURIComponent(x) {
  return lzString.compressToEncodedURIComponent(x);
}

export function decompressFromEncodedURIComponent(x) {
  return lzString.decompressFromEncodedURIComponent(x);
}

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function _generateCustomerIdentifier() {
  let customer = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    customer += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return customer;
}

export function getCustomerIdentifier() {
  let customer = localStorage.getItem('recoaiCustomerIdentifier');
  if (!customer) {
    customer = _generateCustomerIdentifier();
    localStorage.setItem('recoaiCustomerIdentifier', customer);
  }

  return customer;
}
