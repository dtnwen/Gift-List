const MerkleTree = require('../utils/MerkleTree')
const niceList = require('../utils/niceList');
const verifyProof = require('../utils/verifyProof')

const name = 'Mae Hyatt'

const merkleTree = new MerkleTree(niceList)
const root = merkleTree.getRoot()

let index = 0
for (i in niceList) {
    if (niceList[i] === name) index = i
}

console.log(verifyProof())
console.log(index)


