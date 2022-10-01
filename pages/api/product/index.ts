import { IncomingMessage, ServerResponse } from 'http'
import DB from '../../../database/db';

const AllProducts = async (req: IncomingMessage, res: ServerResponse) => {
    try{

        const db = new DB();
        const allEntries = await db.getAll();
        const length = allEntries.length;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ length, data:allEntries}));

    }catch(e){
        console.error(e);
        res.statusCode = 500;
        res.end(
            JSON.stringify({length: 0, data: [], error: 'Algo ha salido mal'}),
        )

    }


}

export default AllProducts;