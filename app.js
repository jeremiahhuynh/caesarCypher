let abc = "abcdefghijklmnopqrstuvwxyz";
function caesarCypher(secret, shift) {
  let str = ""
  for (let i = 0; i < secret.length; i++) {
    let caesar = abc.indexOf(secret[i]);
    if (caesar === -1) str += secret[i];
    else str += abc[(caesar + shift) % abc.length];
  }
  return str
}