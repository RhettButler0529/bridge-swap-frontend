const getBalance = async (BRISContract, account) => {
  return BRISContract.methods.balanceOf(account).call()
}

export default getBalance