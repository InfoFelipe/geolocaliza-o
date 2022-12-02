import { NextApiRequest, NextApiResponse } from "next";
import { buscarDados} from "../models/salvarDados";

async function buscarTodosOsDados(req: NextApiRequest, res: NextApiResponse) {

    const dados = await buscarDados();
    return res.status(200).json(dados);
    
}
export default buscarTodosOsDados