const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkleTree = new MerkleTree(niceList)
const name = 'Mae Hyatt'
async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  let index = -1
  for (i = 0; i < niceList.length; i++) {
    if (niceList[i] === name) {
      index = i
    }
  }
  const proof = merkleTree.getProof(index)
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name,
    proof
  });
  
  // console.log({ gift });
  console.log( {gift} );
}

main();