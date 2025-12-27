// Simulated ZKP Issuer
const crypto = require("crypto");

function issueZKP(vci) {
  return {
    proof: crypto.createHash("sha256").update(vci).digest("hex"),
    message: "Valid voter, eligible, not voted"
  };
}

// Demo
console.log(issueZKP("sample-vci-123"));

