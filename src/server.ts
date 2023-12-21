
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";
import { Server } from "http";



// admin_um
// aqpFcxXOJvBOPJP1

let server:Server ;
async function main() {

    try {
        await mongoose.connect(config.database_url as string);
  

       server= app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        })
    } catch (error) {
        console.log(error)
    }
   

}
main()

process.on('unhandledRejection',() =>{
    console.log('boom unhandle rejection is detected , shtting down....');

    if(server){
        server.close(() =>{
            process.exit(1)
        });
    }
    process.exit(1)
});

process.on('uncaughtException',() =>{
    console.log('boom uncaught is detected , shtting down....');

    process.exit(1)
})