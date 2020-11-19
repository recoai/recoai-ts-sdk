import * as Sqrl from 'squirrelly';
import { getCustomerIdentifier } from './util';
import {
  RecoShow,
  RecoRequest,
  EventType,
  APISettings,
  LocationEnum,
  UserInfo,
  LocationObject,
  Convert,
} from './models';

Sqrl.filters.define('pln_currency', function (amount) {
  return (Math.round(amount * 100) / 100).toFixed(2).replace('.', ',') + ' zł';
});

export interface PlacementConfig {
  // jquery selector
  element_selector: string;
  // after, before
  inject_where: string;
  location: () => LocationEnum | LocationObject;
  condition: () => boolean;
  n_items: number;
  name?: null | string;
  template: string;
  api_endpoint: string;
  url_prefix: string;
}

function injectRecommendations(config: PlacementConfig, data: RecoShow) {
  var renderedHTML = Sqrl.render(config.template, data);
  if (config.inject_where === 'after') {
    $(config.element_selector).after(renderedHTML);
  } else if (config.inject_where == 'append') {
    $(config.element_selector).append(renderedHTML);
  } else if (config.inject_where == 'before') {
    $(config.element_selector).before(renderedHTML);
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
  };

  var reco_request: RecoRequest = {
    event_type: EventType.RecoRequest,
    location: config.location(),
    n_items: config.n_items,
    placement_name: config.name,
    user_info: user_info,
  };
  var elementToInject = $(config.element_selector);

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
        // var dataParsed = JSON.parse(data);
        let recoShow = Convert.toRecoShow(data);
        console.log('recoShow', recoShow);
        if (recoShow.items.length > 0) {
          injectRecommendations(config, recoShow);
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
