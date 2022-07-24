import React from 'react'
import { Heading, Text, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'


const HowToPlayContainer = styled.div`
    border-radius: 20px;
    background: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
    padding: 20px;
    text-align: center;
    margin-bottom: 10px;

    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 40px;
    }
`

const Wordings = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    margin: 0 auto;
    font-size: 10px;
    margin-bottom: 30px;

    ${({ theme }) => theme.mediaQueries.sm} {
        width: 50%;
    }
`
const PlaySteps = styled(Flex)`
    justify-content: center;
    width: 90%;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        width: 100%;
        flex-direction: row;

    }

    ${({ theme }) => theme.mediaQueries.md} {
        flex-direction: row;
        justify-content: space-between;
        width: 85%;
    }

`

const Steps = styled.div`
    background: #15154F;
    border-radius: 10px;
    padding: 20px 15px;
    text-align: left;
    max-width: 220px;
    min-width: 170px;
    margin: 5px auto;

    ${({ theme }) => theme.mediaQueries.sm} {
        margin: 3px;
    }

    ${({ theme }) => theme.mediaQueries.md} {
        margin: 5px;
    }
`
const StepNumber = styled(Flex)`
    color: ${({ theme }) => theme.colors.text};
    background: linear-gradient(155.08deg, #FA00FF -35.34%, #17D2FB 134.08%);
    border-radius: 12px;
    width: 49px;
    height: 47px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

const HowToParticipate = () => {
    const { t } = useTranslation()
    return (
        <HowToPlayContainer>
            <Heading mb='10px' color='blue'>
                {t('How To Participate')}
            </Heading>
            <Wordings>
                {t("It’s easy! Follow the steps below.")}
            </Wordings>
            <PlaySteps>
                <Steps>
                    <StepNumber>1</StepNumber>
                    <Heading mb='10px' color='text'>{t("Get a referral link")}</Heading>
                    <Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12px" }}>
                        {t("Connect a wallet and generate your referral link in the Referral section.")}
                    </Text>
                </Steps>
                <Steps>
                    <StepNumber>2</StepNumber>
                    <Heading mb='10px' color='text'>{t("Invite your friends")}</Heading>
                    <Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12px" }}>
                        {t("Invite your friends to register via your referral link.")}
                    </Text>
                </Steps>
                <Steps>
                    <StepNumber>3</StepNumber>
                    <Heading mb='10px' scale="md" color='text'>{t("Earn crypto")}</Heading>
                    <Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "12px" }}>
                        {t("Receive referral rewards in BRIS tokens from your friends’ earnings forever.")}
                    </Text>
                </Steps>
            </PlaySteps>
        </HowToPlayContainer>
    )
}

export default HowToParticipate

