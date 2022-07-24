import { useCallback, useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useBRIS } from 'hooks/useContract'
import getBalance from '../utils/getBrisBalance'

const useBrisBalance = () => {
    const { account } = useWeb3React()
    const [balance, setBalance] = useState(0)
    const BrisContract = useBRIS()

    const fetchBalance = useCallback(async () => {
        const brisNum = await getBalance(BrisContract, account)
        setBalance(brisNum)
    }, [BrisContract, account])
    
    useEffect(() => {
        if (BrisContract) {
          fetchBalance()
        }
    }, [BrisContract, fetchBalance])
    
    return balance
}

export default useBrisBalance