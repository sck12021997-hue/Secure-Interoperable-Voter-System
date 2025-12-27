// State Voting Portal (Token Based)
let usedTokens = [];

function vote(token) {
  if (usedTokens.includes(token)) {
    return "VOTE_REJECTED_ALREADY_USED";
  }
  usedTokens.push(token);
  return "VOTE_CAST_SUCCESSFULLY";
}

// Demo
console.log(vote("token123"));
console.log(vote("token123"));

