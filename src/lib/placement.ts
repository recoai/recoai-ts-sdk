import * as Sqrl from 'squirrelly';
import { getCustomerIdentifier, getCustomerPrivacySetting } from './util';
import {
  RecoShow,
  RecoRequest,
  EventType,
  APISettings,
  LocationEnum,
  UserInfo,
  LocationClass,
  Convert,
  PrivacySetting,
} from './models';

Sqrl.filters.define('pln_currency', function (amount) {
  return (Math.round(amount * 100) / 100).toFixed(2).replace('.', ',') + ' zł';
});

export interface PlacementConfig {
  // jquery selector string or a function that returns a JQuery HTMLElement
  element_selector: (() => JQuery<HTMLElement>) | string;
  // after, before
  inject_where: string;
  location: () => LocationEnum | LocationClass;
  condition: () => boolean;
  n_items: number;
  name?: null | string;
  template: string;
  api_endpoint: string;
  url_prefix: string;
}

function getJQueryElementFromConfig(
  config: PlacementConfig
): JQuery<HTMLElement> {
  if (typeof config.element_selector === 'function') {
    return config.element_selector();
  } else {
    return $(config.element_selector);
  }
}

function injectRecommendations(
  element: JQuery<HTMLElement>,
  config: PlacementConfig,
  data: RecoShow
) {
  var renderedHTML = Sqrl.render(config.template, data);
  if (config.inject_where === 'after') {
    element.after(renderedHTML);
  } else if (config.inject_where == 'append') {
    element.append(renderedHTML);
  } else if (config.inject_where == 'before') {
    element.before(renderedHTML);
  }
}

function handlePlacement(apiSettings: APISettings, config: PlacementConfig) {
  // make sure we are on the requested domain
  if (
    !window.location.href.startsWith(config.url_prefix) ||
    !config.condition()
  ) {
    return;
  }

  var user_info: UserInfo = {
    visitor_id: getCustomerIdentifier(),
    privacy_setting: <PrivacySetting>getCustomerPrivacySetting(),
  };

  var reco_request: RecoRequest = {
    event_type: EventType.RecoRequest,
    location: config.location(),
    n_items: config.n_items,
    placement_name: config.name,
    user_info: user_info,
  };
  var elementToInject = getJQueryElementFromConfig(config);

  if (elementToInject.length == 1) {
    $.ajax({
      type: 'POST',
      url: apiSettings.url_api + config.api_endpoint,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: JSON.stringify(reco_request),
      timeout: 1000,
      error: function () {},
      success: function (data) {
        console.log('Response', data);
        let recoShow = Convert.toRecoShow(data);
        console.log('recoShow', recoShow);
        if (recoShow.items.length > 0) {
          // make sure that we only show not more than n_items
          recoShow.items = recoShow.items.slice(0, config.n_items);
          injectRecommendations(elementToInject, config, recoShow);
        }
      },
    });
  }
}

export default function runRecommendations(
  apiSettings: APISettings,
  placementConfigs: Array<PlacementConfig>
) {
  placementConfigs.forEach((config) => {
    handlePlacement(apiSettings, config);
  });
}
