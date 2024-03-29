class MiningNode {

    isMining = false;
    currentBlock;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        broadcaster.subscribe((nodeID) => {
            console.log('Nachricht empfangen:', nodeID);
            if (nodeID !== this.id) {
                this.killCurrentBlock();
            }
        });

        newTransaction.subscribe((transaction) => {
            this.blockData.transactions.push(transaction);
        });
    }

    toggle() {
        this.isMining = !this.isMining;
        if (this.isMining) {
            this.mine();
        } else {
            this.killCurrentBlock();
        }
    }

    killCurrentBlock() {
        if (this.currentBlock) {
            this.currentBlock.kill = true;
        }
    }

    async mine() {
        this.blockData = { transactions: [{ from: 'BlockReward', to: this.name, amount: 5 }] };
        this.currentBlock = new Block(Date.now(), this.blockData);
        await blockchain.addBlock(this.currentBlock, this.id);
        if (this.isMining) {
            this.mine();
        }
    }
}