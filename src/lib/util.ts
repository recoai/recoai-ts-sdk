import { APISettings, PrivacySetting } from './models';

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

export function getCustomerPrivacySetting() {
  let customerPrivacySetting = localStorage.getItem("recoaiCustomerPrivacySetting");
  if (!customerPrivacySetting) {
    customerPrivacySetting = PrivacySetting.NonPersonalized;
    localStorage.setItem("recoaiCustomerPrivacySetting", customerPrivacySetting);
  }
  return customerPrivacySetting;
}

export function setCustomerPrivacySetting(setting) {
  localStorage.setItem("recoaiCustomerPrivacySetting", setting);
}

export function extractCategory() {
  return $('.breadcrumb')
    .find("span[itemprop='name']")
    .map(function () {
      return $(this).text();
    })
    .get()
    .join(' > ');
}

export function sendTrackingEvent(params, apiSettings: APISettings) {
  $.ajax({
    type: 'POST',
    url: apiSettings.url_api + '/event',
    data: JSON.stringify(params),
    timeout: 1000,
    error: function () {},
    success: function () {},
  });
}

function extractRecoIDFromString(s) {
  var match = s.match(/rec=([A-Z0-9a-z]+)/);
  if (match && match.length == 2) {
    return match[1];
  } else {
    return null;
  }
}

export function extractRecoID() {
  return extractRecoIDFromString(window.location.search);
}
