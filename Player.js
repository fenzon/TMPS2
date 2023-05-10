import { MediaManager } from "./Media.js";
import { AudioFactory } from "./Factory.js";





// Exemplu de utilizare a sistemului de music player
const mediaManager = new MediaManager();
const audioFactory = new AudioFactory();
mediaManager.registerFactory("audio", audioFactory);

let song1 = mediaManager.createMedia("audio", "Song1", "Nicu", "3:05");
let song2 = mediaManager.createMedia("audio", "Song2", "Valera", "1:02");
console.log(mediaManager.getPlaylist());
mediaManager.deleteMedia(song2);
console.log(mediaManager.getPlaylist()); // output: [Audio]
