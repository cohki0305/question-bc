const ethUtil = require('ethereumjs-util')
const { isEqualAddresses } = require('../helpers/eth')

const validateSign = (req, res, next) => {
  const address = recoverAddress(req.body.signed)

  if (isEqualAddresses(address, req.body.account)) {
    req.address = address
    next()
  } else {
    res.status(401).send()
  }
}

const recoverAddress = function (signature) {
  const sig = ethUtil.fromRpcSig(signature)
  const sha = ethUtil.sha3('test') // todo use env variable

  const publicKey = ethUtil.ecrecover(sha, sig.v, sig.r, sig.s)
  const address = '0x' + ethUtil.pubToAddress(publicKey).toString('hex')

  return address
}

module.exports = { validateSign }
