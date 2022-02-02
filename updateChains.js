const { LIT_CHAINS } = require("lit-js-sdk");
const fs = require("fs");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let md = `# Supported Blockchains\n\n`;

md +=
  "Don't see a blockchain you want?  Email support@litprotocol.com to request that we add one.\n\n";

md += Object.keys(LIT_CHAINS)
  .map((c) => `- ${capitalizeFirstLetter(c)}\n`)
  .join("");

fs.writeFileSync("docs/supportedChains.md", md);
