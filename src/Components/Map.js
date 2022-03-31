import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const Location = {
  lat: 23.752765,
  lng: 90.377713,
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={Location} zoom={10}>
        <Marker onLoad={onLoad} position={Location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
