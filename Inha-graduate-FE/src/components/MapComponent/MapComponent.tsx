import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { useMemo } from "react";
import { Wrapper } from "./styles";

export default function MapComponent() {
  const center = useMemo(() => ({ lat: 37.566826, lng: 126.9786567 }), []);
  return (
    <Wrapper>
      <LoadScriptNext
        googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
        ></GoogleMap>
      </LoadScriptNext>
    </Wrapper>
  );
}
