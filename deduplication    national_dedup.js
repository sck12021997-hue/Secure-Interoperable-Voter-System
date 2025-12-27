// Central Deduplication (Blind)
const fs = require("fs");
const crypto = require("crypto");

const FILE = "national_biometrics.json";
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]");

function hash(x) {
  return crypto.createHash("sha256").update(x).digest("hex");
}

function checkDuplicate(biometric) {
  let db = JSON.parse(fs.readFileSync(FILE));
  const h = hash(biometric);

  if (db.includes(h)) return "DUPLICATE_FOUND";
  db.push(h);
  fs.writeFileSync(FILE, JSON.stringify(db));
  return "UNIQUE_VOTER";
}

// Demo
console.log(checkDuplicate("fingerprint123"));
console.log(checkDuplicate("fingerprint123"));

