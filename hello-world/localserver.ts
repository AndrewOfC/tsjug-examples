

import { HTTPServer }  from "@tsjug/runtime";
import { app } from "./hello-world";

const server = new HTTPServer() ;
await server.listen(app, 3000, "0.0.0.0") ;
