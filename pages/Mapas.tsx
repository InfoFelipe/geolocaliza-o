import { Container } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from "leaflet";
import { MarkerLayer } from 'react-leaflet-marker';


const Mapeamento = () =>{

  const Mapcontainer:any = () =>{
    new Mapcontainer({
      holder :"map",
    });

    useEffect(() =>{
      Mapcontainer();
    }, []);
  }


  return(
    <>
<div id='map'>
<Container>
<MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
  <Popup minWidth={90}>
  
      </Popup>
  </Marker>

  <MarkerLayer>
            <Marker
                position={[55.796391, 49.108891]}
            >
                <div>Hi, i'm a react element</div>
            </Marker>
        </MarkerLayer>

  <Marker position={[51.50, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</Container>
</div>

    </>
  )
}
export default Mapeamento

