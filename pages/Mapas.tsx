import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MarkerLayer } from 'react-leaflet-marker';

interface IFormDados{
  nome: string,
  latitude: number,
  longitude: number,
  quantPontos: number
}


const Mapeamento = () =>{

  const [dados, setDados] = useState<IFormDados>();

  const Mapcontainer:any = () =>{
    new Mapcontainer({
      holder :"map",
    });

    useEffect(() =>{
      Mapcontainer();
    }, []);
  }

  const buscarDados = async () =>{
    const result = await fetch ('/api/buscarDados')
    const dados = await result.json();
    setDados(dados);
  }

  // useEffect(() =>{
  //   buscarDados();
  // }, [])


  return(
    <>
<div id='map'>
<Container style={{marginTop:'10px'}}>
<MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}  >
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
            </Marker>
        </MarkerLayer>

  <Marker position={[51.79, -0.09]}>
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

