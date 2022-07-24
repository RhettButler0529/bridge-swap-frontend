import React, { useState, useEffect } from 'react'
// import PastLotteryDataContext from 'contexts/PastLotteryDataContext'
import { getLotteryIssueIndex } from 'utils/lotteryUtils'
import { useLottery } from 'hooks/useContract'
import Page from 'components/layout/Page'
// import Hero from './components/Hero'
// import PastDrawsPage from './PastDrawsPage'
import BridgeLottery from './components/BridgeLottery'
import TicketBoard from './components/TicketBoard'
import FinishedRounds from './components/FinishedRounds'
import HowToPlay from './components/HowToPlay'
import Faq from './components/FAQ'

const Lottery: React.FC = () => {
  const lotteryContract = useLottery()
  const [, setHistoryData] = useState([])
  const [, setHistoryError] = useState(false)
  const [, setCurrentLotteryNumber] = useState(0)
  const [, setMostRecentLotteryNumber] = useState(1)

  useEffect(() => {
    fetch(`https://api.pancakeswap.com/api/lotteryHistory`)
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch(() => {
        setHistoryError(true)
      })
  }, [])

  useEffect(() => {
    const getInitialLotteryIndex = async () => {
      const index = await getLotteryIssueIndex(lotteryContract)
      const previousLotteryNumber = index - 1

      setCurrentLotteryNumber(index)
      setMostRecentLotteryNumber(previousLotteryNumber)
    }

    if (lotteryContract) {
      getInitialLotteryIndex()
    }
  }, [lotteryContract])

  return (
    <>
      {/* <Hero /> */}
      <Page>
        <BridgeLottery />
        <TicketBoard />
        <FinishedRounds />
        <HowToPlay />
        <Faq />
        {/* <PastLotteryDataContext.Provider
          value={{ historyError, historyData, mostRecentLotteryNumber, currentLotteryNumber }}
        >
          <PastDrawsPage />
        </PastLotteryDataContext.Provider> */}
      </Page>
    </>
  )
}

export default Lottery
