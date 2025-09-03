const blockchain = new Blockchain();
let votes = { Modi: 0, Mamta: 0 };

document.getElementById("voteModi").addEventListener("click", () => {
  votes.Modi++;
  blockchain.addBlock({ voter: "Anonymous", vote: "Modi Ji" });
  voteChart.data.datasets[0].data[0] = votes.Modi;
  voteChart.update();
  updateBlockchainUI(blockchain);
});

document.getElementById("voteMamta").addEventListener("click", () => {
  votes.Mamta++;
  blockchain.addBlock({ voter: "Anonymous", vote: "Mamta Di" });
  voteChart.data.datasets[0].data[1] = votes.Mamta;
  voteChart.update();
  updateBlockchainUI(blockchain);
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(blockchain.chain, null, 2)], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "blockchain.json";
  link.click();
});
