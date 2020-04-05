export class AudioWrapper {

  constructor(srcs) {
    this.audioContext = null;
    this.audioMap = {};
    for (let key in srcs) {
      this.audioMap[key] = {
        audio: new Audio(srcs[key]),
        src: null
      }
    }
  }

  isReady() {
    for (let key in this.audioMap) {
      let sound = this.audioMap[key];
      if (sound.audio.readyState !== HTMLMediaElement.HAVE_ENOUGH_DATA) {
        return false;
      }
    }
    return true;
  }

  loadProgress() {
    let ready = 0;
    let total = 0;
    for (let key in this.audioMap) {
      total++;
      let sound = this.audioMap[key];
      if (sound.audio.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
        ready++
      }
    }
    if (total > 0) {
      return ready / total;
    }
    return 0;
  }

  prepareContext() {
    if (this.audioContext == null) {
      this.audioContext = new AudioContext();
    }
  }

  play(tag) {
    const sound = this.audioMap[tag];
    if (sound
        && this.audioContext
        && (
            sound.audio.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA
            || sound.audio.readyState === HTMLMediaElement.HAVE_CURRENT_DATA)
    ) {

      if (!sound.src) {
        sound.src = this.audioContext.createMediaElementSource(sound.audio);
        sound.src.connect(this.audioContext.destination);
      }
      sound.audio.play()
    }
  }
}

export default AudioWrapper;