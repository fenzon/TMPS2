// Singleton 
export class MediaManager {
    constructor() {
        if (!MediaManager.instance) {
            this.mediaFactories = new Map();
            this.playlist = [];
            MediaManager.instance = this;
        }
        return MediaManager.instance;
    }

    registerFactory(type, factory) {
        this.mediaFactories.set(type, factory);
    }

    createMedia(type, title, artist, duration) {
        const factory = this.mediaFactories.get(type);
        if (factory) {
            const media = factory.createMedia();
            media.title = title;
            media.artist = artist;
            media.duration = duration;
            this.playlist.push(media);
            return media;
        }
        throw new Error(`Error ${type}`);
    }

    deleteMedia(media) {
        const index = this.playlist.indexOf(media);
        if (index > -1) {
            this.playlist.splice(index, 1);
        }
    }

    getPlaylist() {
        return this.playlist;
    }
}