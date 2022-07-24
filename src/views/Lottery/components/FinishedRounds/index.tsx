import React, { useState, useEffect } from 'react'
import { Heading, Text, Flex, Grid } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useLotteryInfo, useCurrentLotteryId, useAccountTickets } from 'hooks/useBuyLottery'
import HistoryButtons from './HistoryButtons'


const RoundsContainer = styled.div`
    border-radius: 20px;
    background: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
    padding: 40px;
    margin-bottom: 10px; 
`
const Title = styled(Flex)`
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        justify-content: space-between;
        flex-direction: row;
    }
`

const HistoryBtnsContainer = styled.div`

`

const RoundDate = styled(Flex)`

`
const RoundNum = styled.span`
    color: ${({ theme }) => theme.colors.bright};
    background: #15154F;
    border-radius: 50px;
    padding: 1px 6px;
    margin: 0 3px;
`
const PrizeWinningContainer = styled(Flex)`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
    }
`
const PrizePot = styled.div`
    background: #15154F;
    border-radius: 30px;
    flex: 0 0 100%;
    width: 100%;
    margin-bottom: 10px;
    padding: 19px;


    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        padding: 40px 20px;
        flex: 0 0 50%;

    }
`
const PotTitle = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;

`
const PotHeading = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;

    ${({ theme }) => theme.mediaQueries.sm} {
        font-size: 20px;

    }
`
const TotalTickets = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 11px;

    ${({ theme }) => theme.mediaQueries.sm} {
        font-size: 14px;
    }

`

const WinningNumber = styled.div`
    padding: 20px;
    background: #15154F;
    border-radius: 30px;
    width: 100%;
    text-align: center;

    ${({ theme }) => theme.mediaQueries.sm} {
        font-size: 14px;
        flex: 0 0 38%;

    }
`
const Prize = styled.div`

`
const UserTicket = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`
const Latest = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    padding: 3px 30px;
    border-radius: 20px;
    text-align: center;
    width: 150px;
    margin-right: auto;
    margin-left: auto;
`
const WinningNumbers = styled(Grid)`
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(3, 60px);
    grid-gap: 12px;
    justify-content: center;
}
`
const DrawnNumber = styled.div`
    background: ${({ theme }) => theme.colors.textSubtle};
    border-radius: 50%;
    padding: 20px 0px;
    color: ${({ theme }) => theme.colors.text};

    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 25px 0px;
    }

`

const FinishedRounds = () => {
    const { t } = useTranslation()
    const [lotteryinfo, setLotteryinfo] = useState({})
    const [accountTickets, setAccountTickets] = useState([])

    const lotteryid = useCurrentLotteryId()
    const { onViewLottery } = useLotteryInfo()
    const { onAccountTickets } = useAccountTickets()


    useEffect(() => {
        (async () => {
            const lottery = await onViewLottery((Number(lotteryid)-1).toString())
            setLotteryinfo(lottery)
        })()
    }, [lotteryid, onViewLottery])

    useEffect(() => {
        (async () => {
            const ticketsArr = await onAccountTickets((Number(lotteryid)-1).toString())
            setAccountTickets(ticketsArr)
        })()
    }, [lotteryid, onAccountTickets])

    let finalNumber
    if(lotteryinfo[12] === undefined || lotteryinfo[12] === '0') {
        finalNumber = 'XXXXXX'
    } else {
        finalNumber = lotteryinfo[12]
    }

    const date = `${new Date(Number(lotteryinfo[2])).toDateString()} ${new Date(Number(lotteryinfo[2])).toLocaleTimeString()}`
    const usingSplit = finalNumber.split('')
    // const usingSpread = Array.from(finalNumber)
    // const usingObjectAssign = Object.assign([], finalNumber)


    return (
        <RoundsContainer>
            <Title>
                <Heading mb='12px' scale='md' color='text'>Finished Rounds</Heading>
                <HistoryBtnsContainer>
                    <HistoryButtons activeIndex={0} />
                </HistoryBtnsContainer>
            </Title>
            <RoundDate>
                <Text mb="22px" fontSize='12px' color='text'>
                    {t(`Round `)}
                    <RoundNum>{`${Number(lotteryid)-1}`}</RoundNum>
                    {t(` Drawn ${date}`)}
                </Text>
            </RoundDate>
            <PrizeWinningContainer>
                <PrizePot>
                    <PotTitle>
                        <PotHeading>
                            {t(`Prize Pot`)}
                        </PotHeading>
                        <TotalTickets>
                            {t(`Total tickets this round: ${Number(lotteryinfo[11])}`)}
                        </TotalTickets>
                    </PotTitle>
                    <Prize>
                        <Heading>
                            {t(`$${Number(lotteryinfo[11])}`)}
                        </Heading>
                        <Text fontSize='11px' mb="22px" color='textSubtle'>
                            {t(`~${Number(lotteryinfo[11])} BRIS`)}
                        </Text>
                    </Prize>
                    <Text color='text'>
                        {t("Your Tickets")}
                    </Text>
                    <Text mb="22px" fontSize='12px' color='text'>
                        {t(`You have `)}
                        <UserTicket>{`{${accountTickets.length}}`}</UserTicket>
                        {t(` tickets for this round.`)}
                    </Text>
                </PrizePot>
                <WinningNumber>
                    <Latest>
                        <Text fontSize='13px' color='text'>{t('LATEST')}</Text>
                    </Latest>
                    <Text m='10px 0px' fontSize='20px' color='text'>{t('Winning Number')}</Text>
                    <WinningNumbers>
                        {
                            usingSplit.map(number => <DrawnNumber>{number}</DrawnNumber>)
                        }
                    </WinningNumbers>
                </WinningNumber>
            </PrizeWinningContainer>
        </RoundsContainer>
    )
}

export default FinishedRounds
