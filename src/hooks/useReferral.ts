import { useCallback, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useReferralContract } from 'hooks/useContract'
import { getReferralsCount, getReferralCommissions } from '../utils/referralUtils'


export const useTotalReferrals = () => {
  const referralContract = useReferralContract()
  const { account } = useWeb3React()
  const [referrals, setReferrals] = useState(0)

  const fetchReferrals = useCallback(async () => {
    const referralsNum = await getReferralsCount(referralContract, account)
    setReferrals(referralsNum)
  }, [account, referralContract])

  useEffect(() => {
    if (referralContract) {
      fetchReferrals()
    }
  }, [referralContract, fetchReferrals])

  return referrals
}

export const useTotalCommissions = () => {
  const referralContract = useReferralContract()
  const { account } = useWeb3React()
  const [commissions, setCommissions] = useState(0)

  const fetchCommissions = useCallback(async () => {
    const commissionsNum = await getReferralCommissions(referralContract, account)
    setCommissions(commissionsNum)
  }, [account, referralContract])

  useEffect(() => {
    if (referralContract) {
      fetchCommissions()
    }
  }, [referralContract, fetchCommissions])

  return commissions
}
