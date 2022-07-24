export const getReferralsCount = async (referralContract, account) => {
  const referralsCount = await referralContract.methods.referralsCount(account).call()
  return referralsCount
}

export const getReferralCommissions = async (referralContract, account) => {
  const referralCommissions = await referralContract.methods.totalReferralCommissions(account).call()
  return referralCommissions
}
