
import { Application } from '@tsjug/runtime' ;
import { IMessage, IReply } from '@tsjug/runtime' ;

export const app = new Application()

export class HelloWorld {
    @app.route("/")
    private home(message: IMessage, reply: IReply): void {
        reply.headers.set("Content-type", "text/plain");
        reply.body = "Hello World\n" ;
    }

    @app.route("/home")
    private home2(message: IMessage, reply: IReply): void {
        reply.headers.set("Content-type", "text/plain");
        reply.body = "Hello World Again\n" ;
    }


}