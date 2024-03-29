let node0 = new MiningNode(0, 'Bodigat');
let node1 = new MiningNode(1, 'Jannik');
let blockchain = new Blockchain();
let CHART_DATA = {
    amounts: [0, , 0, 0, 0, 0],
    labels: ['', '', '', '', '', '']
};

function startNode0() {
    log('Toggle node 0');
    n0.classList.toggle('pause-btn')
    node0.toggle();
}

function startNode1() {
    log('Toggle node 1');
    n1.classList.toggle('pause-btn')
    node1.toggle();
}

function sendMoney() {
    console.log(from.value, to.value, amount.value);
    newTransaction.notify({
        from: from.value,
        to: to.value,
        amount: +amount.value
    });
}

function log(text) {
    let hours = ('0' + new Date().getHours()).slice(-2);
    let minutes = ('0' + new Date().getMinutes()).slice(-2);
    let seconds = ('0' + new Date().getSeconds()).slice(-2);
    logs.innerHTML += `<div class="mb-15"><code>
    <i>${hours}:${minutes}  .${seconds}<i> ■ ${text}
    </code></div>`
}

function updateGraphData(moneyTable) {
    moneyTable.forEach((entry, index) => {
        CHART_DATA.amounts[index] = entry.amount;
        CHART_DATA.labels[index] = entry.name;
    });
    myChart.update();
}