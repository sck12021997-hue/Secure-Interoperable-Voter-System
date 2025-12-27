// Simulated State Registration Service
const express = require("express");
const fs = require("fs");
const crypto = require("crypto");

const app = express();
app.use(express.json());

const FILE = "state_voters.json";
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]");

function hash(x) {
  return crypto.createHash("sha256").update(x).digest("hex");
}

app.post("/register", (req, res) => {
  const { name, biometric } = req.body;
  const bioHash = hash(biometric);

  let voters = JSON.parse(fs.readFileSync(FILE));
  if (voters.find(v => v.bioHash === bioHash)) {
    return res.json({ status: "ALREADY_REGISTERED_IN_STATE" });
  }

  voters.push({ name, bioHash });
  fs.writeFileSync(FILE, JSON.stringify(voters));
  res.json({ status: "REGISTERED_IN_STATE" });
});

app.listen(3001, () => console.log("State Registration Running"));
