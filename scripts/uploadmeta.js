const { ipfsGet } = require("@tatumio/tatum");
/**
 * Gets data from the IPFS
 * @param id - IPFS CID of the file
 */
const ipfsId = await ipfsGet("QmW5F192in1A6t4hViEHgHMYymZM5GTyv38hPqdz8NjQTb");
console.log(ipfsId, "here");
/**
 * Upload file to the IPFS storage.
 * @param file - data buffer of the file. Content Type: multipart/form-data
 * @returns ipfsHash - IPFS hash of the file
 */
const ipfsHash = await ipfsUpload("logo.jpg", "fileName");
