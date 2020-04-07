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
        try {
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
        catch (e) {
            console.log(e)
        }
    }

    load(src) {
        console.log(src)
        let track = this.tracks[src];
        if (track) {
            return track;
        }

        const audio = this.idleAudio.pop();
        if (audio) {
            audio.src = src;
            this.tracks[src] = audio;
            return audio;
        }
        else {
            console.log("Falling back to new Audio")
            return new Audio(src);
        }
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
        console.log("Play\n");
        const track = this.load(src);
        console.log("Got here", track)
        if (track) {
            track.play()
                .catch(reason => {
                    console.log(reason, reason.name)
                })
        }
    }
}

export const defaultCache = new AudioCache(50, 10);

export default AudioCache;