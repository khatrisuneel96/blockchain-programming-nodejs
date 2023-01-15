class Block {
    constructor() {
        this.index = 0,
            this.previousHash = "",
            this.nonce = 0,
            this.hash = "",
            this.transactions = []
    }

    get key() {
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce
    }

    addTransaction(transaction) {
        this.transactions.push(transaction)
    }
}

export default Block