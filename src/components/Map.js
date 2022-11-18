import Map, {
  Source,
  Layer,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import {
  defaultViewState,
  initialViewState,
  layerStyle,
} from "store/mapProperties";

export function MapContainer({ street }) {
  const { geojson, neighborhood, id } = street;

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={initialViewState[neighborhood] || defaultViewState}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id={`${id}-source`} type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl />
      <ScaleControl />
    </Map>
  );
}

export default MapContainer;
