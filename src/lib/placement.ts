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
} from './models';

export interface PlacementConfig {
  // jquery selector
  element_selector: string;
  // after, before
  inject_where: string;
  location: () => LocationEnum | LocationObject;
  filter: () => boolean;
  n_items: number;
  name?: null | string;
  template: string;
  api_endpoint: string;
  url_prefix: string;
}

function injectRecommendations(config: PlacementConfig, data: RecoShow) {
  var renderedHTML = Sqrl.render(config.template, data.items);
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
  if (!window.location.href.startsWith(config.url_prefix)) {
    return;
  }

  var user_info: UserInfo = {
    visitor_id: getCustomerIdentifier(),
  };

  var reco_request: RecoRequest = {
    event_type: EventType.RecoRequest,
    event_time: 0,
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
      data: JSON.stringify(reco_request),
      timeout: 2000,
      error: function () {},
      success: function (data) {
        var dataParsed: RecoShow = JSON.parse(data);
        if (dataParsed.items.length > 0) {
          injectRecommendations(config, dataParsed);
        }
      },
    });
  }
}

export default function runRecommendations(
  apiSettings: APISettings,
  placementConfigs: [PlacementConfig]
) {
  placementConfigs.forEach((config) => {
    handlePlacement(apiSettings, config);
  });
}
