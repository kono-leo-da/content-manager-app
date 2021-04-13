import axios from 'axios';

export default async function resources(req,res){

    if(req.method === "GET"){
        const dataRes = await fetch(`${process.env.API_URL}/resources`);
        const data = await dataRes.json();
        res.send(data);
    }

    if(req.method === "POST" || req.method === "PATCH"){


        
        const { id, title, description, link, timeToFinish, priority} = req.body;

        let url = `${process.env.API_URL}/resources`;

        if(!title || !description || !link || !timeToFinish || !priority){
            return res.status(422).send("Data is missing")
        }

        //const url = req.method === "POST" ? "http://localhost:3001/api/resources" : `http://localhost:3001/api/resources/${id}`

        if(req.method === "PATCH"){
            url += `/${id}`;
        }

        try {
            const axiosRes = await axios[req.method.toLowerCase()](url,req.body);
            return res.send(axiosRes.data);  
        } catch (err) {
            return res.status(422).send("data cannot be stored")
        }
        

        
    }

    
}