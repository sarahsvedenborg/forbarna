import {defaultCache} from "../../common/AudioCache";

export class ClockSounds {

  toSrc(time) {
    const tag = this.tag(time);
    return `/audio/${tag}.mp3`;
  }

  tag(time) {
    return `${String(time.h).padStart(2, "0")}${String(time.m).padStart(2, "0")}`;
  }

  play(time) {
    const src = this.toSrc(time);
    console.log("ClockSounds.play", time)
    defaultCache.play(src);
    console.log("ClockSounds.play", src)
  }

  /**
   * Load sounds +- 1 hour around the given time.
   * @param time
   */
  preloadProximity(time) {
    const totalMinutes = 12*60 + time.h * 60 + time.m;
    for ( let currentMinutes = (totalMinutes - 30); currentMinutes < totalMinutes + 30; currentMinutes += 5) {
      const currentTime = {
        h: Math.floor(currentMinutes / 60) % 12,
        m: currentMinutes % 60
      };
      defaultCache.preload(this.toSrc(currentTime));
    }
  }
}

export const clockSounds = new ClockSounds();