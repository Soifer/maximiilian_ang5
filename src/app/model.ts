export abstract class Socket {
    constructor() {

    }
   abstract connect(url: string);
}
export class SocketIo extends Socket {
    connect(url) {
        console.log("socketIO");
    }
}
export class SocketStomp extends Socket {
    connect(url) {
        console.log("SocketStomp");
    }
}