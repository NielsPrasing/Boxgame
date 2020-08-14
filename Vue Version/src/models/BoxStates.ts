export default class BoxStates {
  box1On = false;
  box2On = false;
  box3On = false;
  box4On = false;
  box5On = false;

  constructor(originalStates?: BoxStates) {

    if(!originalStates) return this;
    this.box1On = originalStates.box1On;
    this.box2On = originalStates.box2On;
    this.box3On = originalStates.box3On;
    this.box4On = originalStates.box4On;
    this.box5On = originalStates.box5On;
  }

  setState(boxNumber: number, state: boolean): void {
    switch (boxNumber) {
      case 1:
        this.box1On = state;
        break;
      case 2:
        this.box2On = state;
        break;
      case 3:
        this.box3On = state;
        break;
      case 4:
        this.box4On = state;
        break;
      case 5:
        this.box5On = state;
        break;
    }
  }

  getState(boxNumber: number): boolean {
      switch(boxNumber) {
        case 1:
            return this.box1On;
        case 2:
            return this.box2On;
        case 3:
            return this.box3On;
        case 4:
            return this.box4On;
        case 5:
            return this.box5On;
      }

      return false;
  }
}
