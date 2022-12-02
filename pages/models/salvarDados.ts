import {prisma} from './prisma'

export async function salvarDados(dados: any) {

    const quantidaDePontos: number = 0;
    const soma: number = quantidaDePontos + 10;

    return await prisma.dados.create({

        dados:{
            nomeEmpresa: dados.nomeEmpresa,
            latitude: dados.latitude,
            longitude: dados.longitude,
            quantPontos: soma
        }
    })
}

export async function buscarDados() {

    const buscarDados = await prisma.dados.findMany();
    return buscarDados;
    
}
