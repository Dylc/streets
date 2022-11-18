import Map, { Source, Layer } from "react-map-gl";
import {
  defaultViewState,
  initialViewState,
  layerStyle,
} from "store/mapProperties";

export function MapContainer({ street }) {
  const { geojson, neighborhood } = street;

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={initialViewState[neighborhood] || defaultViewState}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
}

export default MapContainer;
