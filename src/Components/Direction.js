import React, { useState } from "react";
import { GoogleMap, LoadScript,DirectionsService,DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Location = {
  lat: 23.752765,
  lng: 90.377713,
};

function Direction() {
    const [directionResponse , setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={Location} zoom={10}>

      <DirectionsService
                  options={{ 
                    destination: 'United Hospital Dhaka Bangladesh',
                    origin: 'Banani 11 City Bank Dhaka Bangladesh',
                    travelMode: 'DRIVING'
                  }}
                  
                  callback={res=>{
                      if(res !== null){
                        setDirectionResponse(res);
                      }
                  }}
                />

                {
                    directionResponse && <DirectionsRenderer
                    options={{
                      directions: directionResponse
                    }}
                    
                  />
                }

      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Direction);


