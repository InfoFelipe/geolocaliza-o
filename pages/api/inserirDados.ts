import { NextApiRequest, NextApiResponse } from "next";
import { salvarDados } from "../models/salvarDados";

async function salvarFormulario(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;

    if('POST' === method){
        const param = req.body;
        await salvarDados(JSON.parse(param));
        return res.status(200).json({status:'sucess', message:'ok'})
    }
    return res.status(400).json({status:'error', error:'Not Found'})
}
export default salvarDados
