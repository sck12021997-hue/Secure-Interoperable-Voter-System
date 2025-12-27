// Cryptographic Identity Generator
const crypto = require("crypto");

function generateVCI(name, biometric) {
  return crypto
    .createHash("sha256")
    .update(name + biometric)
    .digest("hex");
}

// Demo
console.log({
  VCI: generateVCI("Ram", "fingerprint123"),
  note: "No name/caste/religion stored"
});

