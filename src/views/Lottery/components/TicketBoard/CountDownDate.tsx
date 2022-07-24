import React from 'react'
import { Text, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'


const Time = styled.div`
    text-align: center;
`
const Value = styled(Flex)`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.bright};
    background-color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => theme.mediaQueries.sm} {
        width: 60px;
        height: 60px;
    }
`

const Img = styled.img`
    width: 7px;
    height: 32px;
    margin-top: 7px;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        margin-top: 15px;

    }
`

const TimeLabel = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 10px;
`

interface CountDownDateProps {
    seconds: number
}

const CountDownDate: React.FC<CountDownDateProps> = ({seconds}) => {
    // let timeDays
    let timeHours
    let timeMinutes
    let timeSeconds

    if (seconds > 0) {
        // Calculating the days, hours, minutes and seconds left
        // timeDays = Math.floor(seconds / (60 * 60 * 24))
        timeHours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60))
        timeMinutes = Math.floor((seconds % (60 * 60)) / 60)
        timeSeconds = Math.floor(seconds % 60)

        // timeDays = timeDays < 10 ? `0${timeDays}` : timeDays
        timeHours = timeHours < 10 ? `0${timeHours}` : timeHours
        timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes
        timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds
    } else {
        // timeDays = '00'
        timeHours = '00'
        timeMinutes = '00'
        timeSeconds = '00'
    }

    return (
        <>
        <Time>
            <Value>{timeHours}</Value>
            <TimeLabel>HOURS</TimeLabel>
        </Time>
        <Img src="/images/time-divider.svg" alt="time-divider" />
        <Time>
            <Value>{timeMinutes}</Value>
            <TimeLabel>MINUTES</TimeLabel>
        </Time>
        <Img src="/images/time-divider.svg" alt="time-divider" />
        <Time>
            <Value>{timeSeconds}</Value>
            <TimeLabel>SECONDS</TimeLabel>
        </Time>
        </>
    )
}

export default CountDownDate