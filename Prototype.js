
class MediaPrototype {//prototype
    clone() { }
}

export class Audio extends MediaPrototype {
    constructor(title, artist, duration) {
        super();
        this.type = "audio";
        this.isPlaying = false;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    play() {
        console.log(`${this.title} by ${this.artist} is playing`);
        this.isPlaying = true;
    }

    pause() {
        console.log(`${this.title} by ${this.artist} is paused`);
        this.isPlaying = false;
    }

    clone() {
        return new Audio(this.title, this.artist, this.duration);
    }
}
