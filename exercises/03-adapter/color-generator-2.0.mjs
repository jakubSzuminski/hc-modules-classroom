class ColorGenerator {
  #colorList = ['red', 'green', 'blue'];
  #colorIndex = 0;

  get(n = 1) {
    let result;

    if(n === 1) {
      result = [this.#colorList[this.#colorIndex]];  
      this.#colorIndex = (this.#colorIndex + 1) === this.#colorList.length ? 0 : this.#colorIndex + 1;
    } else {
      result = this.#colorList.slice(0, Math.min(this.#colorList.length, n));
    }

    return result;
  }

  reset() {
    this.#colorIndex = 0;
  }
}

export default ColorGenerator;