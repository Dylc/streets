import Map, { Source, Layer } from "react-map-gl";
import { layerStyle } from "store/mapProperties";

export function MapContainer({ geojson }) {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 34.99758,
        latitude: 31.89802,
        zoom: 12.79,
      }}
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
