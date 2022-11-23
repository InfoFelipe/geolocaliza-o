import React from "react";

const Formulario = () =>{

    return(
        <>
        <div className="card">
    <h5>Vertical</h5>
    <div className="field">
        <label htmlFor="firstname1">Firstname</label>
        <input id="firstname1" type="text" 
        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div className="field">
        <label htmlFor="lastname1">Lastname</label>
        <input id="lastname1" type="text" 
        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
</div>
        </>
    );
}
export default Formulario
