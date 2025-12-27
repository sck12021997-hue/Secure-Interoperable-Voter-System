// Mobility Token Generator
const crypto = require("crypto");

function generateMobilityToken(vci) {
  return {
    token: crypto.randomBytes(16).toString("hex"),
    linkedVCI: vci,
    valid: true
  };
}

// Demo
console.log(generateMobilityToken("sample-vci-123"));
