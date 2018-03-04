class randomID {
  constructor(len) {
    this.len = len;
  }

  get ID() {
    return this.generateRandomID();
  }

  generateRandomID() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var text = '';
    for (let i = 0; i < this.len; i++) {
      text += CHARS.charAt(Math.floor(Math.random()) * CHARS.length);
    }
    return text;
  }
}

export class twelveBitsRandomID extends randomID {
  constructor() {
    super(12);
  }
}

export class sixteenBitsRandomID extends randomID {
  constructor() {
    super(16);
  }
}
