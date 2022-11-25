import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import { InputMask } from 'primereact/inputMask';
// import { Typography } from '@material-tailwind/react';
import { MultiSelect } from 'primereact/multiselect';
import { Divider } from 'primereact/divider';
import { Password } from 'primereact/password';

const Form = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');
    const [value, setValue] = useState<any>("");

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const header = <p>Sua senha deve conter:</p>;

    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

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
                        <div className='col'>
                      
                        <div className="p-inputgroup">
                        <span className="p-inputgroup-addon " style={{marginTop:'10px'}}>
                                <i className="pi pi-phone"/>
                            </span>
                            <InputMask placeholder='Fone' id="inputtext"  style={{marginTop:'10px'}}mask="(99)99999-9999"></InputMask>
                        </div>

                        <div className="p-inputgroup">
                            <InputMask placeholder='CPF'  style={{marginTop:'10px'}} mask="999.999.999.-99"></InputMask>
                        </div>

                        <div className="p-inputgroup">
                            <InputText placeholder='Email' id="inputtext" style={{marginTop:'10px'}}/>
                        </div>

                        <div className="p-inputgroup">
                          <MultiSelect placeholder='City' display="chip" optionLabel="name" value={""} options={cities}  style={{marginTop:'10px'}} />
                          </div>

                          <div className="p-inputgroup">
                          
                          <Password placeholder='Password' onChange={(e) => setValue(e.target.value)} value={value} header={header} footer={footer} style={{marginTop:'10px'}} />
   
                          </div>
                    
                        </div>
                        </div>
                    
        </Card>
    </>
    );
}
export default Form
