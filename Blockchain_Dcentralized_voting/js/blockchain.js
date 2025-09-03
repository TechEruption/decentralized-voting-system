class Block {
  constructor(index, previousHash, data, timestamp = new Date()) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(
      this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)
    );
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "0", { info: "Genesis Block" });
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const block = new Block(
      this.chain.length,
      this.getLatestBlock().hash,
      data
    );
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const prev = this.chain[i - 1];

      if (current.hash !== current.calculateHash()) return false;
      if (current.previousHash !== prev.hash) return false;
    }
    return true;
  }
}

// 🔐 SHA256 helper
function sha256(message) {
  return CryptoJS.SHA256(message).toString();
}
