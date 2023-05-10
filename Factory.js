import { Audio } from "./Prototype.js";
class MediaFactory {//abstractFactory
    createMedia() { }
}


export class AudioFactory extends MediaFactory {//concret factory
    createMedia() {
        return new Audio();
    }
}