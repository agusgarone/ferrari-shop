import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db';

const Product = async (req:NextApiRequest, res:NextApiResponse) => {
    try{
        const db = new DB();
        const idProduct = req.query.id as string;
        const entry = await db.getById(idProduct);
        res.status(200).json(entry);
    }catch(e){
       console.error(e);
        res.statusCode = 500;
        res.end(
            JSON.stringify({length: 0, data: [], error: 'Algo ha salido mal'}),
        ) 
    }
}

export default Product