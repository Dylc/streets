import NEIGHBORHOODS from "./neighborhoods";

export const layerStyle = {
  id: "point",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "hsla(220, 94%, 50%, 0.53)",
    "line-width": 8,
  },
};

export const defaultViewState = {
  longitude: 34.99758,
  latitude: 31.89802,
  zoom: 12.79,
};

export const initialViewState = {
  [NEIGHBORHOODS.AvneiChen]: {
    longitude: 34.996407,
    latitude: 31.904199,
    zoom: 15.22,
  },
  [NEIGHBORHOODS.HaMeginim]: {
    longitude: 35.001039,
    latitude: 31.909736,
    zoom: 15.22,
  },
};
