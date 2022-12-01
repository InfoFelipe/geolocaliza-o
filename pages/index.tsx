
import {Menubar} from 'primereact/menubar'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { NextPage } from 'next';

const Home: NextPage = () =>{

  const itens = [
    {
      label: "Home",
      icon:"pi pi-home"
    },
    {
      label: "Eng. Software",
      icon:"pi pi-cog"
    },
    {
      label: "Front-End",
      icon:"pi pi-code"
    },
    {
      label: "Back-End",
      icon:"pi pi-code"
    },
    {
      label: "Banco de Dados",
      icon:"pi pi-database"
    },
    {
      label: "Discord",
      icon:"pi pi-discord px-2"
    },
    {
      label: "Youtube",
      icon:"pi pi-youtube px-2"
    },
    {
      label: "Instagram",
      icon:"pi pi-instagram"
    }

  ]

 

  return(
    <>
   
      <Menubar model={itens}/>
  <Card style={{padding:'0px', borderRadius:'0px', alignItems:'center', backgroundColor:'#cae6fc'}}>
    <h1 style={{ position:'relative', marginLeft:'auto'}}>Venha fazer parte do mundo da Tecnologia</h1>
    <Button>Inscreva-se</Button>
  </Card>
    </>
  )
}
export default Home