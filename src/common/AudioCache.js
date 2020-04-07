export class AudioCache {
    constructor(maxIdle, maxLoad) {

        this.maxIdle = maxIdle;
        this.minIdle = Math.ceil(maxIdle / 3);
        this.idleAudio = [];
        this.maxLoad = maxLoad;
        this.tracks = {};
    }

    bootstrapElement(element) {
        const cache = this;
        element.addEventListener("click", () => cache.prepareAudio());
        element.addEventListener("dragstart", () => cache.prepareAudio());
        element.addEventListener("touchstart", () => cache.prepareAudio());
    }

    prepareAudio() {
        const cache = this;
        for (let i = 0; i < this.maxLoad && this.idleAudio.length < this.maxIdle; i++) {
            const audioObj = new Audio("");
            const playPromise = audioObj.play();
            if (playPromise) {
                playPromise.then(() => {
                    console.log("Got here");
                    cache.idleAudio.push(audioObj);
                }).catch((() => {
                    cache.idleAudio.push(audioObj);
                }))
            }
        }
    }

    load(src) {
        let track = this.tracks[src];
        if (track) {
            return track;
        }

        const audio = this.idleAudio.pop();
        if (audio) {
            audio.src = src;
            this.tracks[src] = audio;
            return track;
        }
        return null;
    }

    preload(src) {
        if ( src in this.tracks) {
            return true;
        }

        if (this.idleAudio.length > this.minIdle) {
            return this.load(src) !== null;
        }
        return false;
    }

    play(src) {
        const track = this.load(src);
        if (track) {
            track.play()
        }
    }
}

export const defaultCache = new AudioCache(50, 10);

export default AudioCache;