import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaLocationPin } from "react-icons/fa6";

export default function Map() {
  const position = [51.505, -0.09];
 
  return (
    <div style={{ height: "500px" }}>
      {/* MapContainer is the wrapper for the map */}
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        dragging={true}
        trackResize={true}
        inertia={true}
      >
        {/* TileLayer is the background layer (using OpenStreetMap tiles) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker with Popup */}
        <Marker position={position} >
          <Popup>
            <div style={{borderRadius:'10px'}}>
              <p style={{fontWeight:'bold'}}>McDonald’s</p>
              <p style={{fontSize:'12px',marginTop:'-13%'}}>South London</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
