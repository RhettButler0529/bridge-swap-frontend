import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Heading, Text, Button, Flex, useModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import useBrisBalance from 'hooks/useGetBrisBalance'
import { useLotteryInfo, useCurrentLotteryId, useAccountTickets } from 'hooks/useBuyLottery'
import BuyTicketModal from '../TicketCard/BuyTicketModal'
import CountDownDate from './CountDownDate'


const Board = styled.div`
    border-radius: 20px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 20px;
    background-color: #0F0F71;
    background-image: url(/images/decorations/lottery-prize-bg.svg);
    background-position: center;
    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 50px;
        margin-bottom: 15px;
    }
`
const DrawTimeDisplay = styled(Flex)`
    justify-content: space-between;

`
const Draw = styled.div`
    display: flex;
    justify-content: space-between;

`
const PrizeDisplay = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    margin: 30px auto;
    text-align: center;
    width: 100%;


    ${({ theme }) => theme.mediaQueries.sm} {
        text-align: left;
        width: 70%;
    }

`
const PrizePot = styled(Flex)`
    justify-content: center;
    flex-direction: column;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        flex-direction: row;
        justify-content: space-between;

    }
`

const PrizePotDetails = styled.div`
    margin-bottom: 20px;
    margin-right: 0px;
    min-width: 150px;
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        margin-right: 20px;
    }

`
const CountDownTimer = styled.div`
    text-align: center;
`

const UserTicket = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`
const CountDown = styled(Flex)`
    align-items: flex-start;
    justify-content: center;
`

    // let timeDays
    // let timeHours
    // let timeMinutes
    // let timeSeconds
    // Number(lotteryinfo[2]) - (new Date().getTime() / 1000)
    

const TicketBoard = () => {
    const { t } = useTranslation()
    const maxBalance = useBrisBalance()

    const [lotteryinfo, setLotteryinfo] = useState({})
    const [accountTickets, setAccountTickets] = useState([])
    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    const lotteryid = useCurrentLotteryId()
    const { onViewLottery } = useLotteryInfo()
    const { onAccountTickets } = useAccountTickets()

    useEffect(() => {
        (async () => {
            const lottery = await onViewLottery(lotteryid.toString())
            setLotteryinfo(lottery)
        })()
    }, [lotteryid, onViewLottery])

    useEffect(() => {
        (async () => {
            const ticketsArr = await onAccountTickets(lotteryid.toString())
            setAccountTickets(ticketsArr)
        })()
    }, [lotteryid, onAccountTickets])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const date = `${new Date(Number(lotteryinfo[2])).toDateString()} ${new Date(Number(lotteryinfo[2])).toLocaleTimeString()}`
    const [onPresentBuyTicketsModal] = useModal(<BuyTicketModal max={new BigNumber(maxBalance)}/>)


    return (
        <Board>
            <DrawTimeDisplay>
                <Text fontSize="14px" color='text'>
                    {t("Next Draw")}
                </Text>
                <Draw>
                    <Text fontSize="12px" color='text'>{`#${lotteryid}`}</Text >
                    <Text m="0px 4px" fontSize="12px" color='text'>|</Text>
                    <Text fontSize="12px" color='text'>{`Draw: ${date}`}</Text>
                </Draw>

            </DrawTimeDisplay>
            <PrizeDisplay>
                <Text color='text'>
                    {t("Prize Pot")}
                </Text>
                <PrizePot>
                    <PrizePotDetails>
                        <Heading>
                            {t(`$${Number(lotteryinfo[11])}`)}
                        </Heading>
                        <Text fontSize='11px' mb="22px" color='textSubtle'>
                            {t(`~${Number(lotteryinfo[11])} BRIS`)}
                        </Text>
                        <Text color='text'>
                            {t("Your Tickets")}
                        </Text>
                        <Text mb="22px" fontSize='12px' color='text'>
                            {t(`You have `)}
                            <UserTicket>{`{${accountTickets.length}}`}</UserTicket>
                            {t(` tickets for this round.`)}
                        </Text>
                        <Button scale="sm" variant="primary" onClick={onPresentBuyTicketsModal}>Buy Tickets</Button>                        
                    </PrizePotDetails>

                    <CountDownTimer>
                        <Text mb="12px" color='text'>
                            {t("Get Your Tickets Now")}
                        </Text>
                        <CountDown>
                            <CountDownDate seconds={16501793732 - (currentTime / 1000)} />
                        </CountDown>
                    </CountDownTimer>
                </PrizePot>

            </PrizeDisplay>
        </Board>
    )
}

export default TicketBoard
