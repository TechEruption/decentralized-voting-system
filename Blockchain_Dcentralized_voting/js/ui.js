function updateBlockchainUI(blockchain) {
  let output = "";
  blockchain.chain.forEach(block => {
    output += `🔹 Block ${block.index}\n`;
    output += `Timestamp: ${block.timestamp}\n`;
    output += `Data: ${JSON.stringify(block.data)}\n`;
    output += `Hash: ${block.hash}\n`;
    output += `Previous: ${block.previousHash}\n\n`;
  });
  document.getElementById("blockOutput").innerText = output;
}
