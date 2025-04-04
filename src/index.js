import express  from'express';
import rotas  from  "./routes.js";
import  cors  from 'cors';

const servidor = express();
servidor.use(cors(''))

servidor.use(express.json());

servidor.use("/",rotas);

servidor.listen(2025,()=>{
    console.log("O servidor esta ativo. ✅");
})

export default servidor