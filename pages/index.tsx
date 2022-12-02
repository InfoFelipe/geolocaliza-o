

import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputText';
import { Button } from 'primereact/button';
import dynamic from 'next/dynamic';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { NextPage } from 'next';

interface IFormInputs{
    nome: string,
    latitude: number,
    longitude: number
}

const schema = yup.object({
    nome: yup.string().required("Nome é obrigatório!"),
    latitude: yup.string().required("Latitude é obrigatória!"),
    longitude: yup.string().required("Longitude é obrigatória!"),
  })

const Mapeamento = dynamic(() =>import("./Mapas"), {ssr: false});

const Form: NextPage = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data: IFormInputs) =>{
        inserirDados(data);
    };

    const inserirDados = async (data: IFormInputs) =>{

        const result = await fetch('/api/inserirDados', {
            method:'POST',
            body: JSON.stringify(data)
        });
        if(result.status === 200 ){

        }
    }
 

    return (
    <>
    <Container>
    <Card style={{marginTop:'5%', padding:'auto', width:'40%', marginLeft:'30%', backgroundColor:'#2d3b45', border:'2px solid #202020'}} >
    <div className='container'>
    <div className='row'>
    <div className='col'>
    <h2 style={{color:"white"}}>Formulário</h2>
    <form onSubmit={handleSubmit(onSubmit)} id='form'> 
    <div className="p-inputgroup">
        <span className="p-inputgroup-addon" style={{marginTop:'10px'}}>
            <i className="pi pi-user"/>
        </span>
        
        <InputText 
        placeholder="Nome da empresa" 
        width="10px" 
        style={{marginTop:'10px'}} 
        {...register("nome", { required: true, maxLength: 30 } )} />
    </div>

    {errors.nome && errors.nome.type === "required" && <Typography 
    style={{color: 'red', fontSize:'15px', marginTop:'1px'}}>
        O nome é obrigatório</Typography>}
          

    <div className="p-inputgroup">
    <div className="p-inputgroup">
        
        <InputText 
        placeholder="Insira a Latitude" 
        type='number'
        width="10px" 
        style={{marginTop:'10px'}} 
        {...register("latitude", { required: true, maxLength: 30 } )} />
    </div>
   
    </div>

    {errors.latitude && errors.latitude.type === "required" && <Typography 
    style={{color: 'red', fontSize:'15px', marginTop:'1px'}}>
        Latitude é obrigatória</Typography>}

    <div className="p-inputgroup">
        <InputText 
        placeholder="Insira a longitude" 
        style={{marginTop:'10px'}}
        type='number'
        {...register("longitude", { required: true, maxLength: 30 } )} />
    </div>
    {errors.longitude && errors.longitude.type === "required" && <Typography 
    style={{color: 'red', fontSize:'15px', marginTop:'1px'}}>
        Longitude é obrigatória</Typography>}
    </form>

    </div>
    </div>
    </div> 

        <Button 
            form='form' 
            type='submit' 
            onSubmit={handleSubmit(onSubmit)}
            style={{marginTop:'5px'}}>
                Salvar
        </Button>   

          <Mapeamento />               
    </Card>
        
    
    </Container>
    </>
    );
}
export default Form
// import {Menubar} from 'primereact/menubar'
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { NextPage } from 'next';

// const Home: NextPage = () =>{

//   const itens = [
//     {
//       label: "Home",
//       icon:"pi pi-home"
//     },
//     {
//       label: "Eng. Software",
//       icon:"pi pi-cog"
//     },
//     {
//       label: "Front-End",
//       icon:"pi pi-code"
//     },
//     {
//       label: "Back-End",
//       icon:"pi pi-code"
//     },
//     {
//       label: "Banco de Dados",
//       icon:"pi pi-database"
//     },
//     {
//       label: "Discord",
//       icon:"pi pi-discord px-2"
//     },
//     {
//       label: "Youtube",
//       icon:"pi pi-youtube px-2"
//     },
//     {
//       label: "Instagram",
//       icon:"pi pi-instagram"
//     }

//   ]

 

//   return(
//     <>
   
//       <Menubar model={itens}/>
//   <Card style={{padding:'0px', borderRadius:'0px', alignItems:'center', backgroundColor:'#cae6fc'}}>
//     <h1 style={{ position:'relative', marginLeft:'auto'}}>Venha fazer parte do mundo da Tecnologia</h1>
//     <Button>Inscreva-se</Button>
//   </Card>
//     </>
//   )
// }
// export default Home