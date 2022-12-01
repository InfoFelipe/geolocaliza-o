import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputText';
// import Mapeamento from './Mapas';
import dynamic from 'next/dynamic';

const Mapeamento = dynamic(() =>import("./Mapas"), {ssr: false});

const Form = () => {
 

    return (
    <>
        <Card style={{marginTop:'5%', padding:'auto', width:'40%', marginLeft:'30%', backgroundColor:'#2d3b45', border:'2px solid #202020'}} >
        <div className='container'>
         <div className='row'>
            <div className='col'>
            <h2 style={{color:"white"}}>Formulário</h2>
           
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon" style={{marginTop:'10px'}}>
                                <i className="pi pi-user"/>
                            </span>
                            
                            <InputText placeholder="Nome do usuário" width="10px" style={{marginTop:'10px'}} />
                        </div>
                        </div>
                        </div>
                        </div>        
                    
        </Card>
        
      <Mapeamento />

    </>
    );
}
export default Form
